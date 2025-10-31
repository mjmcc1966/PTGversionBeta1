'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Shuffle, Hourglass } from 'lucide-react';
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
import { useLoading } from '@/app/context/loading-context';
import { db } from '@/lib/firebase';
import { collection, getDocs } from "firebase/firestore";

export interface Wildcard {
  id: string;
  category: string;
  text: string;
}

export default function WildcardPage() {
  const [allWildcards, setAllWildcards] = useState<Wildcard[]>([]);
  const [wildcardsLoading, setWildcardsLoading] = useState(true);
  const [currentCard, setCurrentCard] = useState<Wildcard | null>(null);
  const [usedCardIds, setUsedCardIds] = useState<Set<string>>(new Set());
  const [showReshuffleDialog, setShowReshuffleDialog] = useState(false);
  const { hideLoader } = useLoading();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchWildcards = async () => {
      try {
        const wildcardsCollection = collection(db, 'wildcards');
        const wildcardsSnapshot = await getDocs(wildcardsCollection);
        const wildcardsList = wildcardsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Wildcard[];
        setAllWildcards(wildcardsList);
      } catch (error) {
        console.error("Error fetching wildcards:", error);
      } finally {
        setWildcardsLoading(false);
      }
    };

    fetchWildcards();
  }, []);

  useEffect(() => {
    hideLoader();
  }, [pathname, searchParams, hideLoader]);

  const [timer, setTimer] = useState<number | null>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

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

  const getNextCard = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setTimer(null);
    }

    if (!allWildcards || allWildcards.length === 0) {
      return;
    }

    let availableCards = allWildcards.filter((card) => !usedCardIds.has(card.id));

    if (availableCards.length === 0) {
        setShowReshuffleDialog(true);
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const nextCard = availableCards[randomIndex];
    
    const newUsedIds = new Set(usedCardIds).add(nextCard.id);
    
    setUsedCardIds(newUsedIds);
    setCurrentCard(nextCard);
    
  }, [usedCardIds, intervalId, allWildcards]);

  useEffect(() => {
    const storedUsedIds = sessionStorage.getItem('usedWildcardIds');
    const storedCard = sessionStorage.getItem('currentWildcard');
    
    let loadedUsedIds = new Set<string>();
    if (storedUsedIds) {
      try {
        loadedUsedIds = new Set(JSON.parse(storedUsedIds));
        setUsedCardIds(loadedUsedIds);
      } catch (e) { console.error("Failed to parse used wildcard IDs", e); }
    }

    if (storedCard) {
      try {
        const card = JSON.parse(storedCard);
        // Ensure the restored card's ID is in the used set
        if (loadedUsedIds.has(card.id)) {
            setCurrentCard(card);
        } 
      } catch (e) { console.error("Failed to parse current wildcard", e); }
    }
  }, []);

  useEffect(() => {
    if (!wildcardsLoading && !currentCard && allWildcards.length > 0) {
       getNextCard();
    }
  }, [wildcardsLoading, currentCard, getNextCard, allWildcards]);

  useEffect(() => {
      sessionStorage.setItem('usedWildcardIds', JSON.stringify(Array.from(usedCardIds)));
      if(currentCard) {
        sessionStorage.setItem('currentWildcard', JSON.stringify(currentCard));
      }
  }, [usedCardIds, currentCard]);

  const handleReshuffle = () => {
    const newUsedIds = new Set<string>();
    setUsedCardIds(newUsedIds);
    
    const availableCards = allWildcards.filter(card => !newUsedIds.has(card.id));
    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const firstCard = availableCards[randomIndex];

    if (firstCard) {
        const nextUsedIds = new Set(newUsedIds).add(firstCard.id);
        setCurrentCard(firstCard);
        setUsedCardIds(nextUsedIds);
    }

    setShowReshuffleDialog(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
       <Link href="/home" className="absolute top-4 left-4" aria-label="Return to home page">
        <Button variant="ghost" className="hover:bg-primary/10">
          <Home className="mr-2 h-5 w-5" />
          Home
        </Button>
      </Link>
      {timer !== null && (
        <div className="absolute top-4 right-4 bg-background/80 p-2 rounded-lg shadow-lg">
          <span className="text-xl font-bold">{Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}</span>
        </div>
      )}
      <Card className="w-full max-w-2xl text-center shadow-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Wildcard!</CardTitle>
        </CardHeader>
        <CardContent className="min-h-[200px] flex flex-col items-center justify-center p-6">
          {wildcardsLoading ? (
            <p className="text-xl text-muted-foreground">Loading wildcard...</p>
          ) : currentCard ? (
            <>
              <p className="text-lg font-semibold text-muted-foreground">{currentCard.category}</p>
              <p className="text-2xl mt-4">{currentCard.text}</p>
            </>
          ) : (
            <p className="text-xl text-muted-foreground">No wildcards available. The data file might be empty.</p>
          )}
        </CardContent>
        <CardFooter className="flex justify-between items-center gap-4">
            <div className="flex gap-4">
                <Button onClick={getNextCard} size="lg">
                    <Shuffle className="mr-2 h-5 w-5"/>
                    Draw Next Card
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/home">
                    <Home className="mr-2 h-5 w-5"/>
                    Home
                  </Link>
                </Button>
            </div>
            <Button onClick={startTimer} variant="ghost" size="icon" className="bg-green-500 hover:bg-green-600 text-white rounded-full">
                <Hourglass className="w-6 h-6" />
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
