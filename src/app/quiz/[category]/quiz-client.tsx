
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

const correctSoundBase64 = "data:audio/wav;base64,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n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/aWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWl-";
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

    
