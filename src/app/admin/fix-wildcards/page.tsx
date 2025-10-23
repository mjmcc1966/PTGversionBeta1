'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, doc, deleteDoc, setDoc, DocumentData } from 'firebase/firestore';
import { useLoading } from '@/app/context/loading-context';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { FirestorePermissionError } from '@/firebase/errors';
import { errorEmitter } from '@/firebase/error-emitter';

interface Wildcard extends DocumentData {
  id: string;
  category: string;
  text: string;
}

const correctWildcards = [
    { id: "1", category: "Voter Apathy", text: "A portion of your base is uninspired. Lose 10% of your popular vote total from one state." },
    { id: "2", category: "Scandal", text: "A minor scandal breaks out. Return one Electoral Vote card from a state you control." },
    { id: "3", category: "Gaffe", text: "You make a verbal misstep on the campaign trail. Your opponent gains 500,000 popular votes in a state of their choice." },
    { id: "4", category: "Endorsement", text: "A popular celebrity endorses you. Gain 1,000,000 popular votes in the state of your choice." },
    { id: "5", category: "Economic Boom", text: "The economy is roaring. Gain 250,000 popular votes in every state you currently control." },
    { id: "6", category: "Debate Win", text: "You have a strong debate performance. Take control of one Electoral Vote card from your opponent." },
    { id: "7", category: "Grassroots Movement", text: "A grassroots movement energizes your campaign. Gain 2,000,000 popular votes to be distributed as you wish in up to two states." },
    { id: "8", category: "Negative Ad", text: "A successful negative ad campaign hurts your opponent. Your opponent loses 1,000,000 popular votes from a state they control." },
    { id: "9", category: "Swing State Focus", text: "Your targeted campaign in a swing state pays off. Double your current popular vote total in one swing state." },
    { id: "10", category: "Party Unity", text: "Your party rallies behind you. Gain 500,000 popular votes in three different states." }
];


export default function FixWildcardsPage() {
  const router = useRouter();
  const firestore = useFirestore();
  const { showLoader, hideLoader } = useLoading();
  const { toast } = useToast();

  const wildcardsQuery = useMemoFirebase(() => firestore ? collection(firestore, 'wildcards') : null, [firestore]);
  const { data: existingWildcards, isLoading: wildcardsLoading } = useCollection<Wildcard>(wildcardsQuery);

  const handleFixData = async () => {
    if (!firestore || !existingWildcards) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Firestore is not ready or no wildcards found.",
      });
      return;
    }

    showLoader();
    
    try {
      // Step 1: Delete all existing wildcards one-by-one
      for (const card of existingWildcards) {
        const docRef = doc(firestore, 'wildcards', card.id);
        await deleteDoc(docRef).catch(serverError => {
            const permissionError = new FirestorePermissionError({
                path: docRef.path,
                operation: 'delete',
            });
            errorEmitter.emit('permission-error', permissionError);
            throw permissionError; // Stop the process
        });
      }

      // Step 2: Add all the correct wildcards one-by-one
      for (const card of correctWildcards) {
        const docRef = doc(firestore, 'wildcards', card.id);
        await setDoc(docRef, card).catch(serverError => {
             const permissionError = new FirestorePermissionError({
                path: docRef.path,
                operation: 'create',
                requestResourceData: card,
            });
            errorEmitter.emit('permission-error', permissionError);
            throw permissionError; // Stop the process
        });
      }

      toast({
        title: "Success!",
        description: "Wildcard data has been corrected.",
      });
      router.push('/');

    } catch (error) {
      console.error("An error occurred during the data fix operation:", error);
      // Don't show toast here as the listener will throw
    } finally {
      hideLoader();
    }
  };
  
  useEffect(() => {
     if (!wildcardsLoading && existingWildcards) {
         handleFixData();
     }
  }, [wildcardsLoading, existingWildcards]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Correcting Wildcard Data...</h1>
        <p>This page will automatically correct the wildcard data in your database.</p>
        <p>You will be redirected upon completion.</p>
    </div>
  );
}
