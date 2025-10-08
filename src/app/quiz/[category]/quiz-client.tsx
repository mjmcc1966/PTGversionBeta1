
"use client";

import type { Question } from '@/lib/questions';
import { getQuestionsByCategory } from '@/lib/questions';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, Trophy, Lightbulb } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const correctSoundBase64 = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";
const incorrectSoundBase64 = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";


export function QuizClient({ category }: { category: string }) {
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [askedQuestionIds, setAskedQuestionIds] = useState<Set<number>>(new Set());
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [outOfQuestions, setOutOfQuestions] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { correctAnswerSound, incorrectAnswerSound } = useMemo(() => {
    if (typeof window !== 'undefined') {
      const correct = new Audio(correctSoundBase64);
      const incorrect = new Audio(incorrectSoundBase64);
      return { correctAnswerSound: correct, incorrectAnswerSound: incorrect };
    }
    return { correctAnswerSound: null, incorrectAnswerSound: null };
  }, []);

  useEffect(() => {
    const questions = getQuestionsByCategory(category);
    setAllQuestions(questions);
    setIsLoading(false);

    const storedAskedIds = localStorage.getItem(`askedQuestionIds_${category}`);
    if (storedAskedIds) {
      setAskedQuestionIds(new Set(JSON.parse(storedAskedIds)));
    }
  }, [category]);

  const selectNewQuestion = useCallback(() => {
    const availableQuestions = allQuestions.filter(q => !askedQuestionIds.has(q.id));
    
    if (availableQuestions.length === 0 && allQuestions.length > 0) {
      if(askedQuestionIds.size >= allQuestions.length) {
         setOutOfQuestions(true);
      }
      return;
    }
    
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const newQuestion = availableQuestions[randomIndex];
    
    setCurrentQuestion(newQuestion);
    setSelectedAnswer(null);
    setIsCorrect(null);
  }, [allQuestions, askedQuestionIds]);


  useEffect(() => {
    if (allQuestions.length > 0 && !currentQuestion) {
      selectNewQuestion();
    }
  }, [allQuestions, currentQuestion, selectNewQuestion]);

  const shuffledOptions = useMemo(() => {
    if (!currentQuestion) return [];
    return [...currentQuestion.options].sort(() => Math.random() - 0.5);
  }, [currentQuestion]);

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer) return;

    const correct = answer === currentQuestion?.correctAnswer;
    setSelectedAnswer(answer);
    setIsCorrect(correct);
    
    if (correct) {
      setScore(prev => prev + 1);
      correctAnswerSound?.play();
    } else {
      incorrectAnswerSound?.play();
    }

    const newAskedQuestionIds = new Set([...Array.from(askedQuestionIds), currentQuestion!.id]);
    setAskedQuestionIds(newAskedQuestionIds);
    localStorage.setItem(`askedQuestionIds_${category}`, JSON.stringify(Array.from(newAskedQuestionIds)));

    if (newAskedQuestionIds.size === allQuestions.length && allQuestions.length > 0) {
        setTimeout(() => setQuizFinished(true), 2000);
    }
  };

  const handleNextQuestion = () => {
    if (askedQuestionIds.size === allQuestions.length) {
      setQuizFinished(true);
    } else {
      selectNewQuestion();
    }
  };

  const handleResetQuiz = () => {
    setAskedQuestionIds(new Set());
    localStorage.removeItem(`askedQuestionIds_${category}`);
    setScore(0);
    setOutOfQuestions(false);
    setQuizFinished(false);
    setTimeout(() => {
       const availableQuestions = allQuestions;
       if (availableQuestions.length > 0) {
          const randomIndex = Math.floor(Math.random() * availableQuestions.length);
          setCurrentQuestion(availableQuestions[randomIndex]);
          setSelectedAnswer(null);
          setIsCorrect(null);
       } else {
         setCurrentQuestion(null);
       }
    }, 0);
  };
  
  if (isLoading) {
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
           <Link href="/" passHref>
            <Button variant="outline">Home</Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  if (quizFinished) {
    return (
      <Card className="w-full max-w-2xl text-center p-8 shadow-2xl animate-in fade-in zoom-in-95">
        <CardHeader>
          <Trophy className="w-24 h-24 mx-auto text-accent" />
          <CardTitle className="text-4xl mt-4 text-primary">Quiz Complete!</CardTitle>
          <CardDescription className="text-xl mt-2">
            You scored {score} out of {allQuestions.length}.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button size="lg" onClick={handleResetQuiz}>
            Play Again
          </Button>
          <Link href="/" passHref>
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
            <CardDescription>Could not load questions for this category. Try uploading some!</CardDescription>
            <CardFooter>
                 <Link href="/" passHref>
                    <Button variant="outline" className="mt-4">Home</Button>
                 </Link>
            </CardFooter>
        </Card>
    )
  }

  const getButtonClass = (option: string) => {
    if (!selectedAnswer) {
      return "bg-card hover:bg-primary/10 border-primary/20";
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
  
  const progress = allQuestions.length > 0 ? (askedQuestionIds.size / allQuestions.length) * 100 : 0;
  const questionNumber = Array.from(askedQuestionIds).findIndex(id => id === currentQuestion.id) + 1 || askedQuestionIds.size + 1;


  return (
    <Card className="w-full max-w-2xl shadow-xl animate-in fade-in-50 duration-500">
      <CardHeader>
        <div className="mb-4">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2 text-center">Question {questionNumber} of {allQuestions.length}</p>
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
            disabled={!!selectedAnswer}
          >
             <div className="flex-grow">{option}</div>
             {selectedAnswer && option === currentQuestion.correctAnswer && <CheckCircle className="w-6 h-6 ml-2" />}
             {selectedAnswer && option === selectedAnswer && option !== currentQuestion.correctAnswer && <XCircle className="w-6 h-6 ml-2" />}
          </Button>
        ))}
      </CardContent>
      {selectedAnswer && (
        <CardFooter className="flex-col items-start gap-4 animate-in fade-in duration-500">
          <div className="w-full p-4 rounded-lg bg-primary/5 border border-primary/20">
            <h3 className="font-bold text-lg flex items-center gap-2 text-primary"><Lightbulb/> Explanation</h3>
            <p className="mt-2 text-foreground/80">{currentQuestion.explanation}</p>
          </div>
          <Button onClick={handleNextQuestion} className="w-full md:w-auto self-end">Next Question</Button>
        </CardFooter>
      )}
    </Card>
  );
}

    