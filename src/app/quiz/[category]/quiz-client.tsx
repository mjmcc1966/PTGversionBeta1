
"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
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
const incorrectSoundBase64 = "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAIARKwAAIhYAQACABgAZGF0YQISAACAgICAgICAgICAgICAgICAgIA=";


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
  const [askedQuestionIds, setAskedQuestionIds] = useState<Set<string>>(new Set());
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);

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

  const selectNewQuestion = useCallback((seenIds: Set<string>) => {
    const unaskedQuestions = filteredQuestions.filter(q => !seenIds.has(q.id));

    if (unaskedQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * unaskedQuestions.length);
      const newQuestion = unaskedQuestions[randomIndex];
      const shuffledOptions = [...newQuestion.options].sort(() => Math.random() - 0.5);
      setCurrentQuestion({ ...newQuestion, options: shuffledOptions });
      setQuestionNumber(seenIds.size + 1);
      setAllQuestionsAnswered(false);
    } else {
      setCurrentQuestion(null);
      if (filteredQuestions.length > 0) {
        setAllQuestionsAnswered(true);
      }
    }
  }, [filteredQuestions]);

  useEffect(() => {
    const initializeQuiz = async () => {
      hideLoader();
      if (!auth?.currentUser || !firestore || filteredQuestions.length === 0) {
          setIsLoading(false);
          return;
      };

      setIsLoading(true);
      const userDocRef = doc(firestore, 'users', auth.currentUser.uid);
      try {
        const userDoc = await getDoc(userDocRef);
        let seenIds = new Set<string>();

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const seenForCategory = userData.seenQuestions?.[category] || [];
          seenIds = new Set(seenForCategory);
        } else {
          await setDoc(doc(firestore, 'users', auth.currentUser.uid), { 
            email: auth.currentUser.email, 
            createdAt: new Date() 
          });
        }
        
        setAskedQuestionIds(seenIds);
        selectNewQuestion(seenIds);

      } catch (error) {
        console.error("Error initializing quiz:", error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeQuiz();
  }, [auth?.currentUser, firestore, category, filteredQuestions.length, selectNewQuestion, hideLoader]);


  const updateSeenQuestionsInDb = async (questionId: string) => {
    if (auth?.currentUser && firestore) {
      const userDocRef = doc(firestore, 'users', auth.currentUser.uid);
      try {
        await updateDoc(userDocRef, {
          [`seenQuestions.${category}`]: arrayUnion(questionId),
        });
      } catch (err) {
        // If the document or field doesn't exist, create it.
        if (err.code === 'not-found') {
            await setDoc(userDocRef, { seenQuestions: { [category]: [questionId] } }, { merge: true });
        } else {
            console.error("Error updating seen questions in DB:", err);
        }
      }
    }
  };

  const handleAnswerSubmit = () => {
    if (selectedAnswer && currentQuestion) {
      setIsAnswered(true);
      const audio = new Audio(selectedAnswer === currentQuestion.correctAnswer ? correctSoundBase64 : incorrectSoundBase64);
      audio.play();

      const newAskedIds = new Set(askedQuestionIds).add(currentQuestion.id);
      setAskedQuestionIds(newAskedIds);
      updateSeenQuestionsInDb(currentQuestion.id);
    }
  };

  const handleNextQuestion = () => {
      setIsLoading(true);
      setSelectedAnswer(null);
      setIsAnswered(false);
      selectNewQuestion(askedQuestionIds);
      setIsLoading(false);
  }

  const handleSkipQuestion = () => {
    if (!currentQuestion) return;
    
    setIsLoading(true);
    const newAskedIds = new Set(askedQuestionIds).add(currentQuestion.id);
    setAskedQuestionIds(newAskedIds);
    updateSeenQuestionsInDb(currentQuestion.id);
    
    setSelectedAnswer(null);
    setIsAnswered(false);
    selectNewQuestion(newAskedIds);
    setIsLoading(false);
  };
  
  const handleGoHome = () => {
    showLoader();
    router.push('/home');
  }

  const handleReuseQuestions = async () => {
    setIsLoading(true);
    if (auth?.currentUser && firestore) {
      const userDocRef = doc(firestore, 'users', auth.currentUser.uid);
      try {
        await updateDoc(userDocRef, {
          [`seenQuestions.${category}`]: []
        });
      } catch (error) {
        console.error("Error resetting questions:", error);
      }
    }
    const newSeenIds = new Set<string>();
    setAskedQuestionIds(newSeenIds);
    setAllQuestionsAnswered(false);
    selectNewQuestion(newSeenIds);
    setIsLoading(false);
  };

  const handleBuyExpansion = () => {
    alert('Expansion packs are not yet available.');
  };
  
  if (isLoading) {
    return (
      <div className="w-full max-w-2xl mx-auto">
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

  if (allQuestionsAnswered) {
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
            Reuse All Questions
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
          <CardTitle className="text-2xl font-bold">No Questions</CardTitle>
          <CardDescription>There are no questions available for this category.</CardDescription>
        </CardHeader>
        <CardFooter>
            <Button onClick={handleGoHome} className="w-full" variant="outline">
                <Home className="mr-2 h-4 w-4" />
                Return to Home
            </Button>
        </CardFooter>
      </Card>
    );
  }

  const totalQuestions = filteredQuestions.length;

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
                  <Image src={currentQuestion.imageUrl} alt="Question image" fill objectFit="cover" />
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
               <Button onClick={handleNextQuestion} className="w-full mt-4">
                  Next Question
               </Button>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
}

    