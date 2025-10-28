
"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, Trophy, Lightbulb, Hourglass, Home } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLoading } from '@/app/context/loading-context';
import allQuestionsData from '@/app/admin/data/questions.json';
import { useFirebase } from '@/firebase';
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';

const correctSoundBase64 = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";
const incorrectSoundBase64 = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";

export interface Question {
  id: string;
  question: string;
  imageUrl?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  category: string;
}

export function QuizClient({ category }: { category: string }) {
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState(true);
  const [askedQuestionIds, setAskedQuestionIds] = useState<Set<string>>(new Set());
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [outOfQuestions, setOutOfQuestions] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const { hideLoader, showLoader } = useLoading();
  const { user, firestore } = useFirebase();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [timer, setTimer] = useState<number | null>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    hideLoader();
  }, [pathname, searchParams, hideLoader]);
  
  useEffect(() => {
    const categoryToFilter = category.replace(/-/g, '_');
    const filteredQuestions = (allQuestionsData as Question[]).filter(q => q.category === categoryToFilter);
    setAllQuestions(filteredQuestions);
    setQuestionsLoading(false);
  }, [category]);

  const categoryKey = useMemo(() => category.replace(/-/g, '_'), [category]);

  const fetchAskedQuestionIds = useCallback(async () => {
    if (user && firestore) {
      const userDocRef = doc(firestore, 'users', user.uid);
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        const seenForCategory = userData.seenQuestions?.[categoryKey] || [];
        setAskedQuestionIds(new Set(seenForCategory));
        setQuestionNumber(seenForCategory.length);
      } else {
        setAskedQuestionIds(new Set());
        setQuestionNumber(0);
      }
    }
  }, [user, firestore, categoryKey]);


  useEffect(() => {
    fetchAskedQuestionIds();
  }, [fetchAskedQuestionIds]);


  const { correctAnswerSound, incorrectAnswerSound } = useMemo(() => {
    if (typeof window !== 'undefined') {
      const correct = new Audio(correctSoundBase64);
      const incorrect = new Audio(incorrectSoundBase64);
      return { correctAnswerSound: correct, incorrectAnswerSound: incorrect };
    }
    return { correctAnswerSound: null, incorrectAnswerSound: null };
  }, []);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const startTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setTimer(null);
      return;
    }
    setTimer(120);
    const newIntervalId = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === null || prevTimer <= 1) {
          clearInterval(newIntervalId);
          return null;
        }
        return prevTimer - 1;
      });
    }, 1000);
    setIntervalId(newIntervalId);
  };


  const selectNewQuestion = useCallback(() => {
    if (!allQuestions || allQuestions.length === 0) return;
    
    const availableQuestions = allQuestions.filter(q => !askedQuestionIds.has(q.id));
    
    if (availableQuestions.length === 0) {
      setOutOfQuestions(true);
      setQuizFinished(true);
      return;
    }
    
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const newQuestion = availableQuestions[randomIndex];
    
    setCurrentQuestion(newQuestion);
    setSelectedAnswer(null);
    setSubmitted(false);
    setIsCorrect(null);
  }, [allQuestions, askedQuestionIds]);


  useEffect(() => {
    if (allQuestions && allQuestions.length > 0 && !currentQuestion && !quizFinished) {
      selectNewQuestion();
    }
  }, [allQuestions, currentQuestion, selectNewQuestion, askedQuestionIds, quizFinished]);

  const shuffledOptions = useMemo(() => {
    if (!currentQuestion) return [];
    return [...currentQuestion.options].sort(() => Math.random() - 0.5);
  }, [currentQuestion]);

  const handleAnswerSelect = (answer: string) => {
    if (submitted) return;
    setSelectedAnswer(answer);
  };

  const updateSeenQuestionsInFirestore = async (questionId: string) => {
    if (!user || !firestore) return;
    const userDocRef = doc(firestore, 'users', user.uid);
    const categoryKeyToUpdate = `seenQuestions.${categoryKey}`;
    
    try {
      await updateDoc(userDocRef, {
        [categoryKeyToUpdate]: arrayUnion(questionId)
      });
    } catch (error: any) {
       if (error.code === 'not-found') {
        await setDoc(userDocRef, { 
            seenQuestions: { 
                [categoryKey]: [questionId] 
            } 
        }, { merge: true });
       } else {
        console.error("Error updating seen questions:", error);
       }
    }
};

  const markQuestionAsSeen = async (questionId: string) => {
    setAskedQuestionIds(prev => {
        const newAskedQuestionIds = new Set(prev);
        newAskedQuestionIds.add(questionId);
        return newAskedQuestionIds;
    });
    setQuestionNumber(prev => prev + 1);
    await updateSeenQuestionsInFirestore(questionId);
  };


  const handleSubmitAnswer = async () => {
    if (!selectedAnswer || !currentQuestion || !allQuestions) return;

    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setTimer(null);
    }

    setSubmitted(true);
    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(prev => prev + 1);
      correctAnswerSound?.play();
    } else {
      incorrectAnswerSound?.play();
    }

    await markQuestionAsSeen(currentQuestion.id);

    if (askedQuestionIds.size + 1 >= allQuestions.length) {
        setTimeout(() => setQuizFinished(true), 3000);
    }
  };
  
  const handleSkipQuestion = () => {
    if (!currentQuestion || !allQuestions) return;
    
    markQuestionAsSeen(currentQuestion.id).then(() => {
        if (askedQuestionIds.size +1 >= allQuestions.length) {
            setQuizFinished(true);
        } else {
            selectNewQuestion();
        }
    });
  };

  const handleResetQuiz = async () => {
    showLoader();
    if (!user || !firestore) return;
    
    const userDocRef = doc(firestore, 'users', user.uid);
    const categoryKeyToReset = `seenQuestions.${categoryKey}`;

    await updateDoc(userDocRef, {
        [categoryKeyToReset]: []
    });

    setAskedQuestionIds(new Set());
    setScore(0);
    setOutOfQuestions(false);
    setQuizFinished(false);
    setCurrentQuestion(null);
    setQuestionNumber(0);
    hideLoader();
  };
  
  if (questionsLoading) {
    return (
        <Card className="w-full max-w-2xl shadow-lg">
            <CardHeader>
                <Skeleton className="h-8 w-3/4" />
            </CardHeader>
            <CardContent className="space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
            </CardContent>
        </Card>
    )
  }
  
  if (outOfQuestions) {
    return (
      <Card className="w-full max-w-2xl text-center p-8 shadow-2xl animate-in fade-in zoom-in-95">
        <CardHeader>
          <CardTitle className="text-2xl mt-4 text-primary">Out of Questions</CardTitle>
          <CardDescription className="text-xl mt-2">
            You have run out of questions in this category. You can either buy an expansion pack of all new questions, or you can reset your question count and re-use the questions you have already seen. Which would you like to do?
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button size="lg" onClick={handleResetQuiz}>
            Re-Use Questions
          </Button>
          <Button size="lg" onClick={() => alert("Expansion packs are not available yet!")}>
            Buy Expansion Pack
          </Button>
           <Link href="/home" passHref>
            <Button variant="outline">Home</Button>
           </Link>
        </CardContent>
      </Card>
    );
  }

  if (quizFinished && !outOfQuestions) {
    return (
      <Card className="w-full max-w-2xl text-center p-8 shadow-2xl animate-in fade-in zoom-in-95">
        <CardHeader>
          <Trophy className="w-24 h-24 mx-auto text-accent" />
          <CardTitle className="text-4xl mt-4 text-primary">Quiz Complete!</CardTitle>
          <CardDescription className="text-xl mt-2">
            You have answered all questions in this category.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button size="lg" onClick={handleResetQuiz}>
            Play Again
          </Button>
          <Link href="/home" passHref>
             <Button variant="outline" size="lg">Home</Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  if (!currentQuestion) {
    return (
        <Card className="w-full max-w-2xl p-8 text-center shadow-lg">
            <CardTitle>No questions available</CardTitle>
            <CardDescription>Could not load questions for this category. The data file might be empty or missing.</CardDescription>
            <CardFooter>
                 <Link href="/home" passHref>
                    <Button variant="outline" className="mt-4">Home</Button>
                 </Link>
            </CardFooter>
        </Card>
    )
  }

  const getButtonClass = (option: string) => {
    if (!submitted) {
        return option === selectedAnswer
            ? "bg-primary/20 border-primary"
            : "bg-card hover:bg-primary/10 border-primary/20";
    }
    const isCorrectAnswer = option === currentQuestion.correctAnswer;
    const isSelectedAnswer = option === selectedAnswer;

    if (isCorrectAnswer) {
      return "bg-green-500/80 hover:bg-green-500/90 text-primary-foreground border-green-600";
    }
    if (isSelectedAnswer) {
      return "bg-red-500/80 hover:bg-red-500/90 text-primary-foreground border-red-600";
    }
    return "bg-card/50 border-primary/10 text-muted-foreground";
  };
  
  const progress = allQuestions && allQuestions.length > 0 ? ((askedQuestionIds.size) / allQuestions.length) * 100 : 0;


  return (
    <>
      {timer !== null && (
        <div className="absolute top-4 right-4 bg-background/80 p-2 rounded-lg shadow-lg">
          <span className="text-xl font-bold">{Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}</span>
        </div>
      )}
      <Card className="w-full max-w-2xl shadow-xl animate-in fade-in-50 duration-500">
        <CardHeader>
          <div className="mb-4">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2 text-center">Question {questionNumber + 1} of {allQuestions?.length}</p>
          </div>
          {currentQuestion.imageUrl && (
            <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
              <Image
                src={currentQuestion.imageUrl}
                alt="Question image"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                data-ai-hint="landmark"
              />
            </div>
          )}
          <CardTitle className="text-2xl md:text-3xl leading-snug">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {shuffledOptions.map((option) => (
            <Button
              key={option}
              variant="outline"
              size="lg"
              className={cn("h-auto py-4 whitespace-normal justify-start text-left text-base transition-all duration-300 transform hover:scale-105 border-2", getButtonClass(option))}
              onClick={() => handleAnswerSelect(option)}
              disabled={submitted}
            >
              <div className="flex-grow">{option}</div>
              {submitted && option === currentQuestion.correctAnswer && <CheckCircle className="w-6 h-6 ml-2" />}
              {submitted && option === selectedAnswer && option !== currentQuestion.correctAnswer && <XCircle className="w-6 h-6 ml-2" />}
            </Button>
          ))}
        </CardContent>
        {!submitted ? (
          <CardFooter className="flex justify-between gap-2">
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={handleSkipQuestion}>Skip Question</Button>
              {selectedAnswer && <Button onClick={handleSubmitAnswer}>Submit Answer</Button>}
            </div>
            <Button onClick={startTimer} variant="ghost" size="icon" className="bg-green-500 hover:bg-green-600 text-white rounded-full">
                <Hourglass className="w-6 h-6" />
            </Button>
          </CardFooter>
        ) : (
          <CardFooter className="flex-col items-start gap-4 animate-in fade-in duration-500">
            <div className="w-full p-4 rounded-lg bg-primary/5 border border-primary/20">
              <h3 className="font-bold text-lg flex items-center gap-2 text-primary"><Lightbulb/> Explanation</h3>
              <p className="mt-2 text-foreground/80">{currentQuestion.explanation}</p>
            </div>
             <Button asChild variant="outline">
                <Link href="/home"><Home className="mr-2 h-5 w-5"/>Home</Link>
             </Button>
          </CardFooter>
        )}
      </Card>
    </>
  );
}
