
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
import { doc, getDoc, updateDoc, arrayUnion, setDoc } from 'firebase/firestore';

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

export function QuizClient({ category }: { category: string }) {
  const { auth, firestore } = useFirebase();
  const router = useRouter();
  const { hideLoader, showLoader } = useLoading();

  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showAllAnsweredScreen, setShowAllAnsweredScreen] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [seenQuestionIds, setSeenQuestionIds] = useState<Set<string>>(new Set());

  const categoryKey = useMemo(() => {
    if (category === 'state-trivia') return 'state_trivia';
    if (category === 'general-trivia') return 'general_trivia';
    if (category === 'government-trivia') return 'government_trivia';
    return category;
  }, [category]);

  const filteredQuestions = useMemo(() => {
    if (!allQuestionsData) return [];
    return (allQuestionsData as Question[]).filter(
      (q) => q.category.toLowerCase().replace(/ /g, '_') === categoryKey
    );
  }, [categoryKey]);

  const loadNextQuestion = useCallback((currentSeenIds: Set<string>) => {
    const availableQuestions = filteredQuestions.filter(q => !currentSeenIds.has(q.id));

    if (availableQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      const nextQuestion = availableQuestions[randomIndex];
      const shuffledOptions = [...nextQuestion.options].sort(() => Math.random() - 0.5);

      setCurrentQuestion({ ...nextQuestion, options: shuffledOptions });
      setQuestionNumber(currentSeenIds.size + 1);
      setTotalQuestions(filteredQuestions.length);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setShowAllAnsweredScreen(false);
    } else {
      setShowAllAnsweredScreen(filteredQuestions.length > 0);
      setCurrentQuestion(null);
    }
    setIsLoading(false);
    hideLoader();
  }, [filteredQuestions, hideLoader]);

  const initializeQuiz = useCallback(async () => {
    setIsLoading(true);
    let initialSeenIds = new Set<string>();

    if (auth?.currentUser && firestore) {
      try {
        const userDocRef = doc(firestore, 'users', auth.currentUser.uid);
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

    setSeenQuestionIds(initialSeenIds);
    loadNextQuestion(initialSeenIds);
  }, [auth, firestore, category, loadNextQuestion]);

  useEffect(() => {
    initializeQuiz();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const markQuestionAsSeen = async (questionId: string) => {
    const newSeenIds = new Set(seenQuestionIds);
    newSeenIds.add(questionId);
    setSeenQuestionIds(newSeenIds);
    
    if (auth?.currentUser && firestore) {
      const userDocRef = doc(firestore, 'users', auth.currentUser.uid);
      try {
        // Use set with merge to create the document if it doesn't exist
        await setDoc(userDocRef, { 
            seenQuestions: { [category]: Array.from(newSeenIds) } 
        }, { merge: true });
      } catch (err) {
        console.error("Error updating seen questions in DB:", err);
      }
    } else {
      sessionStorage.setItem(`seen_${category}`, JSON.stringify(Array.from(newSeenIds)));
    }
  };
  
  const handleAnswerSubmit = async () => {
    if (!currentQuestion || isAnswered) return;

    const audio = new Audio(selectedAnswer === currentQuestion.correctAnswer ? correctSoundBase64 : incorrectSoundBase64);
    audio.play();

    setIsAnswered(true);
    await markQuestionAsSeen(currentQuestion.id);
  };
  
  const handleSkipQuestion = async () => {
    if (currentQuestion) {
      showLoader();
      await markQuestionAsSeen(currentQuestion.id);
      const newSeenIds = new Set(seenQuestionIds);
      newSeenIds.add(currentQuestion.id);
      loadNextQuestion(newSeenIds);
    }
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
        await updateDoc(userDocRef, {
          [`seenQuestions.${category}`]: []
        });
      } catch (error) {
        console.error("Error resetting questions:", error);
      }
    } else {
        sessionStorage.removeItem(`seen_${category}`);
    }
    setSeenQuestionIds(new Set());
    loadNextQuestion(new Set());
  };

  const handleBuyExpansion = () => {
    alert('Expansion packs are not yet available.');
  };

  if (isLoading) {
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

  if (showAllAnsweredScreen) {
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
                  onClick={() => setSelectedAnswer(option)}
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

    