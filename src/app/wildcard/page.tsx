
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { wildcards, Wildcard } from '@/lib/wildcards';
import { Home, Shuffle } from 'lucide-react';
import Link from 'next/link';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function WildcardPage() {
  const [currentCard, setCurrentCard] = useState<Wildcard | null>(null);
  const [usedCardIds, setUsedCardIds] = useState<Set<number>>(new Set());
  const [showReshuffleDialog, setShowReshuffleDialog] = useState(false);
  const router = useRouter();

  const getNextCard = useCallback(() => {
    const availableCards = wildcards.filter((card) => !usedCardIds.has(card.id));

    if (availableCards.length === 0) {
      setShowReshuffleDialog(true);
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const nextCard = availableCards[randomIndex];
    
    const newUsedIds = new Set(usedCardIds);
    newUsedIds.add(nextCard.id);
    
    setUsedCardIds(newUsedIds);
    setCurrentCard(nextCard);
    
    localStorage.setItem('usedWildcardIds', JSON.stringify(Array.from(newUsedIds)));
  }, [usedCardIds]);

  useEffect(() => {
    const storedUsedIds = localStorage.getItem('usedWildcardIds');
    if (storedUsedIds) {
      setUsedCardIds(new Set(JSON.parse(storedUsedIds)));
    }
  }, []);

  useEffect(() => {
    // Draw the first card when the component mounts and we have loaded the used IDs
    if (!currentCard && usedCardIds.size < wildcards.length) {
       getNextCard();
    } else if (usedCardIds.size >= wildcards.length && !currentCard) {
      setShowReshuffleDialog(true);
    }
  }, [currentCard, getNextCard, usedCardIds]);

  const handleReshuffle = () => {
    localStorage.removeItem('usedWildcardIds');
    setUsedCardIds(new Set());
    setShowReshuffleDialog(false);
    // Use a timeout to ensure state is updated before drawing the next card
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * wildcards.length);
      const firstCard = wildcards[randomIndex];
      const newUsedIds = new Set([firstCard.id]);
      setUsedCardIds(newUsedIds);
      setCurrentCard(firstCard);
      localStorage.setItem('usedWildcardIds', JSON.stringify([firstCard.id]));
    }, 100);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
       <Link href="/home" className="absolute top-4 left-4" aria-label="Return to home page">
        <Button variant="ghost" className="hover:bg-primary/10">
          <Home className="mr-2 h-5 w-5" />
          Home
        </Button>
      </Link>
      <Card className="w-full max-w-2xl text-center shadow-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-destructive">Wildcard!</CardTitle>
        </CardHeader>
        <CardContent className="min-h-[200px] flex flex-col items-center justify-center p-6">
          {currentCard ? (
            <>
              <p className="text-lg font-semibold text-muted-foreground">{currentCard.category}</p>
              <p className="text-2xl mt-4">{currentCard.text}</p>
            </>
          ) : (
            <p className="text-xl text-muted-foreground">Loading wildcard...</p>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
            <Button onClick={getNextCard} size="lg">
                <Shuffle className="mr-2 h-5 w-5"/>
                Draw Next Card
            </Button>
        </CardFooter>
      </Card>

      <AlertDialog open={showReshuffleDialog} onOpenChange={setShowReshuffleDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>All Wildcards Used!</AlertDialogTitle>
            <AlertDialogDescription>
              You have seen all the wildcards. The deck will now be reshuffled.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleReshuffle}>Reshuffle and Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
