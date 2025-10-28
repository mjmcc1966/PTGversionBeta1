
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
import allQuestionsData from '@/app/admin/data/questions.json';
import { useFirebase } from '@/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const correctSoundBase64 = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";
const incorrectSoundBase64 = "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAIARKwAAIhYAQACABgAZGF0YQISAACAgIA=";

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
  questions: Question[];
  seenQuestionIds: Set<string>;
  currentQuestion: Question | null;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: string | null;
  isAnswered: boolean;
  isLoading: boolean;
  isFinished: boolean;
}

export function QuizClient({ category }: { category: string }) {
  const { auth, firestore } = useFirebase();
  const router = useRouter();
  const { showLoader, hideLoader } = useLoading();

  const categoryKey = useMemo(() => {
    if (category === 'state-trivia') return 'state_trivia';
    if (category === 'general-trivia') return 'general_trivia';
    if (category === 'government-trivia') return 'government_trivia';
    return category;
  }, [category]);

  const allCategoryQuestions = useMemo(() =>
    (allQuestionsData as Question[]).filter(
      (q) => q.category.toLowerCase().replace(/ /g, '_') === categoryKey
    ), [categoryKey]);

  const [state, setState] = useState<QuizState>({
    questions: allCategoryQuestions,
    seenQuestionIds: new Set(),
    currentQuestion: null,
    questionNumber: 0,
    totalQuestions: allCategoryQuestions.length,
    selectedAnswer: null,
    isAnswered: false,
    isLoading: true,
    isFinished: false,
  });

  const selectNextQuestion = useCallback((seenIds: Set<string>): Question | null => {
    const availableQuestions = allCategoryQuestions.filter(q => !seenIds.has(q.id));
    if (availableQuestions.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const nextQuestion = availableQuestions[randomIndex];
    const shuffledOptions = [...nextQuestion.options].sort(() => Math.random() - 0.5);
    return { ...nextQuestion, options: shuffledOptions };
  }, [allCategoryQuestions]);

  useEffect(() => {
    const loadProgressAndStart = async () => {
      let initialSeenIds = new Set<string>();

      if (auth?.currentUser && firestore) {
        const userDocRef = doc(firestore, 'users', auth.currentUser.uid);
        try {
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            const seenForCategory = userData.seenQuestions?.[category] || [];
            initialSeenIds = new Set(seenForCategory);
          }
        } catch (error) {
          console.error("Error fetching user progress:", error);
        }
      } else {
        const sessionSeen = sessionStorage.getItem(`seen_${category}`);
        if (sessionSeen) {
          initialSeenIds = new Set(JSON.parse(sessionSeen));
        }
      }

      const nextQuestion = selectNextQuestion(initialSeenIds);
      
      if (nextQuestion) {
        setState(s => ({
          ...s,
          seenQuestionIds: initialSeenIds,
          currentQuestion: nextQuestion,
          questionNumber: initialSeenIds.size + 1,
          isLoading: false,
          isFinished: false,
        }));
      } else {
        setState(s => ({
          ...s,
          seenQuestionIds: initialSeenIds,
          currentQuestion: null,
          isLoading: false,
          isFinished: allCategoryQuestions.length > 0 && initialSeenIds.size >= allCategoryQuestions.length,
        }));
      }
      hideLoader();
    };

    loadProgressAndStart();
  }, [category, auth, firestore, selectNextQuestion, allCategoryQuestions.length, hideLoader]);
  
  const updateSeenInStorage = useCallback(async (newSeenIds: Set<string>) => {
    if (auth?.currentUser && firestore) {
      const userDocRef = doc(firestore, 'users', auth.currentUser.uid);
      try {
        await setDoc(userDocRef, { 
            seenQuestions: { [category]: Array.from(newSeenIds) } 
        }, { merge: true });
      } catch (err) {
        console.error("Error updating seen questions in DB:", err);
      }
    } else {
      sessionStorage.setItem(`seen_${category}`, JSON.stringify(Array.from(newSeenIds)));
    }
  }, [auth, firestore, category]);

  const markQuestionAsSeen = useCallback(async (questionId: string) => {
    const newSeenIds = new Set(state.seenQuestionIds);
    newSeenIds.add(questionId);
    
    setState(s => ({...s, seenQuestionIds: newSeenIds}));
    await updateSeenInStorage(newSeenIds);
    return newSeenIds;
  }, [state.seenQuestionIds, updateSeenInStorage]);

  const handleAnswerSubmit = async () => {
    if (!state.currentQuestion || state.isAnswered) return;

    const isCorrect = state.selectedAnswer === state.currentQuestion.correctAnswer;
    const audio = new Audio(isCorrect ? correctSoundBase64 : incorrectSoundBase64);
    audio.play();

    setState(s => ({ ...s, isAnswered: true }));
    await markQuestionAsSeen(state.currentQuestion.id);
  };
  
  const handleSkipQuestion = async () => {
    if (!state.currentQuestion) return;
    
    showLoader();
    const newSeenIds = await markQuestionAsSeen(state.currentQuestion.id);
    const nextQuestion = selectNextQuestion(newSeenIds);

    if (nextQuestion) {
        setState(s => ({
            ...s,
            currentQuestion: nextQuestion,
            questionNumber: newSeenIds.size + 1,
            selectedAnswer: null,
            isAnswered: false,
        }));
    } else {
        setState(s => ({ ...s, isFinished: true, currentQuestion: null }));
    }
    hideLoader();
  };

  const handleGoHome = () => {
    showLoader();
    router.push('/home');
  };

  const handleReuseQuestions = async () => {
    showLoader();
    if (auth?.currentUser && firestore) {
      const userDocRef = doc(firestore, 'users', auth.currentUser.uid);
      try {
        await setDoc(userDocRef, {
          seenQuestions: { [category]: [] }
        }, { merge: true });
      } catch (error) {
        console.error("Error resetting questions:", error);
      }
    } else {
        sessionStorage.removeItem(`seen_${category}`);
    }
    
    const nextQuestion = selectNextQuestion(new Set());
    setState(s => ({
      ...s,
      seenQuestionIds: new Set(),
      currentQuestion: nextQuestion,
      questionNumber: 1,
      selectedAnswer: null,
      isAnswered: false,
      isFinished: false,
    }));
    hideLoader();
  };

  const handleBuyExpansion = () => {
    alert('Expansion packs are not yet available.');
  };

  if (state.isLoading) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <p className="text-center text-muted-foreground mb-4">Loading...</p>
        <Skeleton className="h-10 w-1/4 mb-4" />
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

  if (state.isFinished) {
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
          <Button onClick={handleBuyExpansion} className="w-full">
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

  if (!state.currentQuestion) {
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
        <p className="text-sm text-muted-foreground">Question {state.questionNumber} of {state.totalQuestions}</p>
        <Progress value={state.totalQuestions > 0 ? (state.questionNumber / state.totalQuestions) * 100 : 0} className="w-full" />
      </div>
      <Card>
        {!state.isAnswered ? (
          <>
            <CardHeader>
              {state.currentQuestion.imageUrl && (
                <div className="relative h-48 w-full mb-4 rounded-t-lg overflow-hidden">
                  <Image src={state.currentQuestion.imageUrl} alt="Question image" fill style={{objectFit:"cover"}} />
                </div>
              )}
              <CardTitle className="text-2xl font-bold">{state.currentQuestion.question}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {state.currentQuestion.options.map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left h-auto py-3 px-4 whitespace-normal",
                    state.selectedAnswer === option && "bg-accent text-accent-foreground ring-2 ring-primary"
                  )}
                  onClick={() => setState(s => ({...s, selectedAnswer: option}))}
                >
                  {option}
                </Button>
              ))}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={handleSkipQuestion} variant="outline">
                <SkipForward className="mr-2 h-4 w-4" />
                Skip Question
              </Button>
              <Button onClick={handleAnswerSubmit} disabled={!state.selectedAnswer}>Submit Answer</Button>
            </CardFooter>
          </>
        ) : (
          <>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{state.currentQuestion.question}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {state.currentQuestion.options.map((option) => {
                const isCorrect = option === state.currentQuestion.correctAnswer;
                const isSelected = option === state.selectedAnswer;
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
                  <p className="text-muted-foreground">{state.currentQuestion.explanation}</p>
                </div>
              </div>
              <div className="w-full mt-4">
                <Button onClick={handleGoHome} variant="outline" className="w-full">
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
