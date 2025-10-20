
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Landmark, Scale, Upload, Hourglass } from 'lucide-react';
import { UploadQuestionsDialog } from '@/components/upload-questions-dialog';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const categories = [
    { name: (<div>General Trivia<br/>$10,000,000</div>), href: '/quiz/general-trivia', icon: <BrainCircuit className="w-6 h-6" /> },
    { name: (<div>State Trivia<br/>10 Million Popular Votes</div>), href: '/quiz/state-trivia', icon: <Landmark className="w-6 h-6" /> },
    { name: (<div>Government Trivia<br/>Electoral Votes</div>), href: '/quiz/government-trivia', icon: <Scale className="w-6 h-6" /> },
  ];

  const [isUploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClient(true);
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


  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
       {isClient && timer !== null && (
        <div className="absolute top-4 right-4 bg-background/80 p-2 rounded-lg shadow-lg">
          <span className="text-xl font-bold">{Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}</span>
        </div>
      )}
      <div className="w-full max-w-md relative">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Politics: The Game</CardTitle>
             {isClient && (
              <Button onClick={startTimer} variant="ghost" size="icon" className="absolute top-2 right-2">
                <Hourglass className="w-6 h-6" />
              </Button>
            )}
          </CardHeader>
          <CardContent className="grid gap-4">
            {categories.map((category) => (
              <Button asChild key={category.href} className="w-full h-20 text-xl justify-start" variant="outline">
                <Link href={category.href}>
                  <div className="flex items-center space-x-4">
                    {category.icon}
                    <span>{category.name}</span>
                  </div>
                </Link>
              </Button>
            ))}
            {isClient && (
               <UploadQuestionsDialog>
                 <Button className="w-full h-20 text-xl justify-start" variant="outline">
                    <div className="flex items-center space-x-4">
                      <Upload className="w-6 h-6" />
                      <span><div>Upload Custom Questions<br/>The Popular Vote</div></span>
                    </div>
                  </Button>
               </UploadQuestionsDialog>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
