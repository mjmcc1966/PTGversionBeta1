"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, Trophy, Lightbulb, Home, SkipForward } from 'lucide-react';
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
  const { hideLoader } = useLoading();

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [askedQuestionIds, setAskedQuestionIds] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);

  const filteredQuestions = useMemo(() => {
    return (allQuestionsData as Question[]).filter(
      (q) => q.category.toLowerCase().replace(/ /g, '-') === category
    );
  }, [category]);

  const selectNewQuestion = useCallback((seenIds: Set<string>) => {
    const unaskedQuestions = filteredQuestions.filter(q => !seenIds.has(q.id));

    if (unaskedQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * unaskedQuestions.length);
      const newQuestion = unaskedQuestions[randomIndex];
      const shuffledOptions = [...newQuestion.options].sort(() => Math.random() - 0.5);
      setCurrentQuestion({ ...newQuestion, options: shuffledOptions });
    } else {
      setCurrentQuestion(null);
    }
  }, [filteredQuestions]);

  useEffect(() => {
    const initializeQuiz = async () => {
      setIsLoading(true);
      let seenIds = new Set<string>();

      if (auth?.currentUser && firestore) {
        const userDocRef = doc(firestore, 'users', auth.currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const seenForCategory = userData.seenQuestions?.[category] || [];
          seenIds = new Set(seenForCategory);
        } else {
          // If user doc doesn't exist, create it.
          await setDoc(userDocRef, { email: auth.currentUser.email, createdAt: new Date() });
        }
      }
      
      setAskedQuestionIds(seenIds);
      setQuestionNumber(seenIds.size);
      selectNewQuestion(seenIds);
      setIsLoading(false);
    };

    initializeQuiz();
    hideLoader();
  }, [auth?.currentUser, firestore, category, selectNewQuestion, hideLoader]);


  const updateSeenQuestions = async (questionId: string) => {
    if (auth?.currentUser && firestore) {
      const userDocRef = doc(firestore, 'users', auth.currentUser.uid);
      await updateDoc(userDocRef, {
        [`seenQuestions.${category}`]: arrayUnion(questionId),
      }).catch(err => console.error("Error updating seen questions:", err));
    }
  };

  const handleAnswerSelect = (option: string) => {
    if (!isAnswered) {
      setSelectedAnswer(option);
    }
  };

  const handleAnswerSubmit = () => {
    if (selectedAnswer && currentQuestion) {
      setIsAnswered(true);
      const newAskedIds = new Set(askedQuestionIds).add(currentQuestion.id);
      setAskedQuestionIds(newAskedIds);
      updateSeenQuestions(currentQuestion.id);
      setQuestionNumber(newAskedIds.size);

      const audio = new Audio(selectedAnswer === currentQuestion.correctAnswer ? correctSoundBase64 : incorrectSoundBase64);
      audio.play();
    }
  };

  const handleSkipQuestion = () => {
      if (currentQuestion) {
          const newAskedIds = new Set(askedQuestionIds).add(currentQuestion.id);
          setAskedQuestionIds(newAskedIds);
          updateSeenQuestions(currentQuestion.id);
          setQuestionNumber(newAskedIds.size);
          
          setSelectedAnswer(null);
          setIsAnswered(false);
          selectNewQuestion(newAskedIds);
      }
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

  if (!currentQuestion) {
    return (
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <Trophy className="mx-auto h-16 w-16 text-yellow-500" />
          <CardTitle className="text-2xl font-bold">Quiz Complete!</CardTitle>
          <CardDescription>You have answered all questions in this category.</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button asChild className="w-full">
            <Link href="/home">Return to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  const totalQuestions = filteredQuestions.length;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-4">
        <p className="text-sm text-muted-foreground">Question {questionNumber + 1} of {totalQuestions}</p>
        <Progress value={((questionNumber + 1) / totalQuestions) * 100} className="w-full" />
      </div>
      <Card>
        {!isAnswered ? (
          <>
            <CardHeader>
              {currentQuestion.imageUrl && (
                <div className="relative h-48 w-full mb-4 rounded-t-lg overflow-hidden">
                  <Image src={currentQuestion.imageUrl} alt="Question image" layout="fill" objectFit="cover" />
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
                  onClick={() => handleAnswerSelect(option)}
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
              {selectedAnswer && (
                 <Button onClick={handleAnswerSubmit}>Submit Answer</Button>
              )}
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
                      isSelected && "ring-2 ring-offset-2 ring-blue-500"
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
               <Button asChild className="w-full mt-4">
                <Link href="/home">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Link>
              </Button>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
}
