
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Landmark, Scale, Upload, Hourglass } from 'lucide-react';
import { UploadQuestionsDialog } from '@/components/upload-questions-dialog';
import React, { useState, useEffect } from 'react';
import imageData from '@/app/lib/placeholder-images.json';

export default function Home() {
  const categories = [
    { name: (<div>General Trivia<br/>$10,000,000</div>), href: '/quiz/general-trivia', icon: <BrainCircuit className="w-6 h-6" /> },
    { name: (<div>State Trivia<br/>10 Million Popular Votes</div>), href: '/quiz/state-trivia', icon: <Landmark className="w-6 h-6" /> },
    { name: (<div>Government Trivia<br/>Electoral Votes</div>), href: '/quiz/government-trivia', icon: <Scale className="w-6 h-6" /> },
  ];

  const [timeLeft, setTimeLeft] = useState(120);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    if (!timerActive || timeLeft === 0) {
      if (timeLeft === 0) {
        setTimerActive(false); // Stop the timer when it reaches 0
      }
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timerActive, timeLeft]);

  const toggleTimer = () => {
    if (timerActive) {
      setTimerActive(false);
      setTimeLeft(120); // Reset time
    } else {
      setTimeLeft(120);
      setTimerActive(true);
    }
  };
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const { src, alt, "data-ai-hint": dataAiHint } = imageData.home_background;

  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          data-ai-hint={dataAiHint}
          priority
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {timerActive && (
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-3 rounded-lg shadow-lg text-4xl font-bold font-mono">
          {formatTime(timeLeft)}
        </div>
      )}

      <main className="flex min-h-screen w-full items-center justify-center p-4">
        <div className="relative">
          <Card className="w-full max-w-md shadow-2xl bg-card/80 backdrop-blur-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl md:text-5xl font-headline tracking-wider text-primary">
                PTG
              </CardTitle>
              <p className="text-muted-foreground font-headline">Personal Trivia Game</p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                {categories.map((category) => (
                  <Link key={category.href} href={category.href} passHref>
                    <Button
                      variant="default"
                      size="lg"
                      className="w-full justify-start text-lg py-8 font-headline shadow-lg transition-transform hover:scale-105"
                    >
                      <div className="mr-4">{category.icon}</div>
                      {category.name}
                    </Button>
                  </Link>
                ))}
                 <UploadQuestionsDialog>
                   <Button
                      variant="outline"
                      size="lg"
                      className="w-full justify-start text-lg py-8 font-headline shadow-lg transition-transform hover:scale-105"
                    >
                      <div className="mr-4"><Upload className="w-6 h-6" /></div>
                      Upload Questions
                    </Button>
                 </UploadQuestionsDialog>
                   <Link href="/quiz/custom-trivia" passHref>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full justify-start text-lg py-8 font-headline shadow-lg transition-transform hover:scale-105"
                    >
                      <div className="mr-4"><BrainCircuit className="w-6 h-6" /></div>
                      Custom Trivia
                    </Button>
                  </Link>
              </div>
            </CardContent>
          </Card>
          <div className="absolute -top-5 -right-5">
             <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full bg-accent/80 text-accent-foreground shadow-lg hover:bg-accent hover:scale-110 transition-transform"
                onClick={toggleTimer}
                aria-label="Toggle Timer"
              >
                <Hourglass className="w-6 h-6" />
              </Button>
          </div>
        </div>
      </main>
    </>
  );
}
