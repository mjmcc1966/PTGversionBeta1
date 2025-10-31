
"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, Lightbulb, Home, SkipForward, RefreshCw, ShoppingCart, Trophy } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useRouter } from 'next/navigation';
import { useLoading } from '@/app/context/loading-context';
import { db } from '@/lib/firebase';
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc, setDoc, collection, query, where, orderBy, limit, getDocs, DocumentData } from 'firebase/firestore';

interface Question {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  imageUrl?: string;
}

interface QuizState {
  totalQuestions: number;
  seenQuestionIds: Set<string>;
  currentQuestion: Question | null;
  selectedAnswer: string | null;
  isAnswered: boolean;
  isFinished: boolean;
  isLoading: boolean;
  error: string | null;
}

export function QuizClient({ category }: { category: string }) {
  const [user, setUser] = useState<User | null>(null);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const firestore = db;
  const router = useRouter();
  const { hideLoader } = useLoading();

  const categoryKey = useMemo(() => {
    if (category === 'state-trivia') return 'state_trivia';
    if (category === 'general-trivia') return 'general_trivia';
    if (category === 'government-trivia') return 'government_trivia';
    return category;
  }, [category]);

  const [quizState, setQuizState] = useState<QuizState>(() => {
    const initialState = {
      totalQuestions: 0,
      seenQuestionIds: new Set(),
      currentQuestion: null,
      selectedAnswer: null,
      isAnswered: false,
      isFinished: false,
      isLoading: true,
      error: null,
    };
    
    if (typeof window === 'undefined') {
      return initialState;
    }
    
    try {
      const savedState = sessionStorage.getItem(`quizState_${categoryKey}`);
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        return {
          ...initialState,
          totalQuestions: parsedState.totalQuestions || 0,
          seenQuestionIds: new Set(parsedState.seenQuestionIds || []),
        };
      }
    } catch (e) {
        console.error("Could not parse quiz state from session storage", e);
    }

    return initialState;
  });

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setIsUserLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const fetchTotalQuestions = useCallback(async () => {
    if (!firestore) return 0;
    const countDocRef = doc(firestore, 'counts', categoryKey);
    const countDoc = await getDoc(countDocRef);
    return countDoc.exists() ? countDoc.data().total : 0;
  }, [firestore, categoryKey]);

  const selectNextQuestion = useCallback(async (seenIds: Set<string>): Promise<Question | null> => {
    if (!firestore) return null;

    const qCollection = collection(firestore, 'questions');
    const maxAttempts = 10;

    // 1. Try to fetch a random question first
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const randomId = doc(collection(firestore, 'questions')).id;
      const qQuery = query(
        qCollection,
        where("category", "==", categoryKey),
        where("__name__", ">=", randomId),
        orderBy("__name__"),
        limit(30)
      );

      let querySnapshot = await getDocs(qQuery);
      let potentialQuestions = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as DocumentData));

      // If we didn't find any questions, wrap around
      if (potentialQuestions.length === 0) {
        const wrapAroundQuery = query(
          qCollection,
          where("category", "==", categoryKey),
          orderBy("__name__"),
          limit(30)
        );
        querySnapshot = await getDocs(wrapAroundQuery);
        potentialQuestions = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as DocumentData));
      }

      const newQuestions = potentialQuestions.filter(q => !seenIds.has(q.id));

      if (newQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * newQuestions.length);
        const question = newQuestions[randomIndex] as Omit<Question, 'options'> & { options: string[] };
        const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
        return { ...question, options: shuffledOptions };
      }
    }

    // 2. If random fetching fails, get all questions and filter
    console.warn("Random question fetch failed, falling back to full query.");
    const allQuestionsQuery = query(qCollection, where("category", "==", categoryKey));
    const allQuestionsSnapshot = await getDocs(allQuestionsQuery);
    const allQuestions = allQuestionsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as DocumentData));
    const unseenQuestions = allQuestions.filter(q => !seenIds.has(q.id));

    if (unseenQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * unseenQuestions.length);
        const question = unseenQuestions[randomIndex] as Omit<Question, 'options'> & { options: string[] };
        const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
        return { ...question, options: shuffledOptions };
    }

    // 3. If all questions have been seen, return null
    console.warn("All questions in this category have been seen.");
    return null;
  }, [firestore, categoryKey]);

  const updateSeenInStorage = useCallback((newSeenIds: Set<string>) => {
    if (user && firestore) {
        const userDocRef = doc(firestore, 'users', user.uid);
        const dataToSet = { seenQuestions: { [categoryKey]: Array.from(newSeenIds) } };
        setDoc(userDocRef, dataToSet, { merge: true })
            .catch((error) => console.error("Error updating user progress:", error));
    } else {
        sessionStorage.setItem(`seen_${categoryKey}`, JSON.stringify(Array.from(newSeenIds)));
    }
  }, [user, firestore, categoryKey]);

  useEffect(() => {
    const loadQuizData = async () => {
        if (isUserLoading || !firestore) return;
        
        setQuizState(prev => ({ ...prev, isLoading: true, error: null }));

        try {
            const total = await fetchTotalQuestions();
            let initialSeenIds = quizState.seenQuestionIds;

            if (initialSeenIds.size === 0) {
              if (user) {
                const userDocRef = doc(firestore, 'users', user.uid);
                const userDoc = await getDoc(userDocRef);
                if (userDoc.exists()) {
                  const userData = userDoc.data();
                  initialSeenIds = new Set(userData.seenQuestions?.[categoryKey] || []);
                }
              } else {
                const sessionSeen = sessionStorage.getItem(`seen_${categoryKey}`);
                if (sessionSeen) initialSeenIds = new Set(JSON.parse(sessionSeen));
              }
            }
            
            const nextQuestion = await selectNextQuestion(initialSeenIds);

            setQuizState(prev => ({
              ...prev,
              totalQuestions: total,
              seenQuestionIds: initialSeenIds,
              currentQuestion: nextQuestion,
              isFinished: total > 0 && initialSeenIds.size >= total,
              isLoading: false,
            }));
        } catch (error) {
            console.error("Error loading quiz data:", error);
            setQuizState(prev => ({
                ...prev,
                isLoading: false,
                error: "A problem occurred while loading the quiz. Please try again later.",
            }));
        } finally {
            hideLoader();
        }
    };

    loadQuizData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryKey, user, isUserLoading, firestore]);


  useEffect(() => {
    const stateToSave = {
      totalQuestions: quizState.totalQuestions,
      seenQuestionIds: Array.from(quizState.seenQuestionIds),
    };
    sessionStorage.setItem(`quizState_${categoryKey}`, JSON.stringify(stateToSave));
  }, [quizState.seenQuestionIds, quizState.totalQuestions, categoryKey]);


  const handleAnswerSubmit = () => {
    if (!quizState.currentQuestion || quizState.isAnswered) return;

    const newSeenIds = new Set(quizState.seenQuestionIds).add(quizState.currentQuestion.id);
    updateSeenInStorage(newSeenIds);
    
    setQuizState(prevState => ({
        ...prevState,
        isAnswered: true,
        seenQuestionIds: newSeenIds,
    }));
  };

  const handleNextQuestion = useCallback(async () => {
    setQuizState(prev => ({...prev, isLoading: true, error: null}));
    try {
        const nextQuestion = await selectNextQuestion(quizState.seenQuestionIds);
        setQuizState(prevState => ({
          ...prevState,
          currentQuestion: nextQuestion,
          selectedAnswer: null,
          isAnswered: false,
          isLoading: false,
          isFinished: prevState.totalQuestions > 0 && prevState.seenQuestionIds.size >= prevState.totalQuestions,
        }));
    } catch(error) {
        console.error("Error fetching next question:", error);
        setQuizState(prev => ({
            ...prev,
            isLoading: false,
            error: "Failed to load the next question. Please refresh the page.",
        }));
    }
  }, [quizState.seenQuestionIds, selectNextQuestion]);

  const handleGoHome = () => router.push('/home');

  const handleReuseQuestions = async () => {
    const newSeenIds = new Set<string>();
    updateSeenInStorage(newSeenIds);

    setQuizState(prev => ({...prev, isLoading: true, error: null}));
    try {
        const nextQuestion = await selectNextQuestion(newSeenIds);
        setQuizState(prevState => ({
          ...prevState,
          seenQuestionIds: newSeenIds,
          currentQuestion: nextQuestion,
          isFinished: false,
		  isAnswered: false,
          selectedAnswer: null,
          isLoading: false,
        }));
    } catch (error) {
        console.error("Error restarting quiz:", error);
        setQuizState(prev => ({
            ...prev,
            isLoading: false,
            error: "Failed to restart the quiz. Please try again.",
        }));
    }
  };
  
  const handleBuyExpansion = () => alert('Expansion packs are not yet available.');

  const {
    isLoading,
    isFinished,
    currentQuestion,
    totalQuestions,
    selectedAnswer,
    isAnswered,
    seenQuestionIds,
    error,
  } = quizState;
  
  const questionNumber = seenQuestionIds.size;

  if (error) {
      return (
        <Card className="w-full max-w-md text-center">
            <CardHeader>
                <XCircle className="mx-auto h-16 w-16 text-red-500" />
                <CardTitle className="text-2xl font-bold">An Error Occurred</CardTitle>
                <CardDescription>{error}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button onClick={handleGoHome} className="w-full" variant="outline">
                    <Home className="mr-2 h-4 w-4" />
                    Return to Home
                </Button>
            </CardFooter>
        </Card>
      )
  }

  if (isLoading) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <p className="text-center text-muted-foreground mb-4">Loading quiz...</p>
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
          </CardHeader>
          <CardContent className="grid gap-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Skeleton className="h-10 w-32" />
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (isFinished) {
    return (
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <Trophy className="mx-auto h-16 w-16 text-yellow-500" />
          <CardTitle className="text-2xl font-bold">Category Complete!</CardTitle>
          <CardDescription>You've answered all available questions in this category. What would you like to do next?</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button onClick={handleReuseQuestions} className="w-full">
            <RefreshCw className="mr-2 h-4 w-4" />
            Start Over
          </Button>
          <Button onClick={handleBuyExpansion} className="w-full" variant="secondary">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Buy Expansion Pack
          </Button>
        </CardContent>
        <CardFooter>
          <Button onClick={handleGoHome} className="w-full" variant="outline">
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
        </CardFooter>
      </Card>
    );
  }

  if (!currentQuestion) {
      return (
        <Card className="w-full max-w-md text-center">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">No Questions Available</CardTitle>
                <CardDescription>There are no questions available for this category right now. Please check back later or try another category.</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button onClick={handleGoHome} className="w-full" variant="outline">
                    <Home className="mr-2 h-4 w-4" />
                    Return to Home
                </Button>
            </CardFooter>
        </Card>
      )
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-4">
        <p className="text-sm text-muted-foreground">Question {questionNumber} of {totalQuestions}</p>
        <Progress value={totalQuestions > 0 ? (questionNumber / totalQuestions) * 100 : 0} className="w-full" />
      </div>
      <Card>
        {!isAnswered ? (
          <>
            <CardHeader>
              {currentQuestion.imageUrl && (
                <div className="relative h-48 w-full mb-4 rounded-t-lg overflow-hidden">
                  <Image src={currentQuestion.imageUrl} alt="Question image" fill style={{objectFit:"cover"}} />
                </div>
              )}
              <CardTitle className="text-2xl font-bold">{currentQuestion.question}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {currentQuestion.options.map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left h-auto py-3 px-4 whitespace-normal",
                    selectedAnswer === option && "bg-accent text-accent-foreground ring-2 ring-primary"
                  )}
                  onClick={() => setQuizState(prev => ({...prev, selectedAnswer: option}))}
                >
                  {option}
                </Button>
              ))}
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button onClick={handleNextQuestion} variant="outline">
                    <SkipForward className="mr-2 h-4 w-4" />
                    Skip Question
                </Button>
                <Button onClick={handleAnswerSubmit} disabled={!selectedAnswer}>Submit Answer</Button>
            </CardFooter>
          </>
        ) : (
          <>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{currentQuestion.question}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {currentQuestion.options.map((option) => {
                const isCorrect = option === currentQuestion.correctAnswer;
                const isSelected = option === selectedAnswer;
                return (
                  <div
                    key={option}
                    className={cn(
                      "flex items-center justify-between rounded-lg border p-3",
                      isCorrect && "bg-green-100 dark:bg-green-900 border-green-500",
                      isSelected && !isCorrect && "bg-red-100 dark:bg-red-900 border-red-500",
                    )}
                  >
                    <span>{option}</span>
                    {isCorrect && <CheckCircle className="h-5 w-5 text-green-600" />}
                    {isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-600" />}
                  </div>
                );
              })}
            </CardContent>
            <CardFooter className="flex-col items-start gap-4 pt-4 border-t">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Explanation</h3>
                  <p className="text-muted-foreground">{currentQuestion.explanation}</p>
                </div>
              </div>
              <div className="w-full mt-4 flex justify-between gap-4">
                 <Button onClick={handleGoHome} variant="outline" className="flex-1">
                    <Home className="mr-2 h-4 w-4" />
                    Return to Home
                </Button>
              </div>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
}
