'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth, useFirestore } from '@/firebase';
import { writeBatch, collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { useLoading } from '@/app/context/loading-context';

const wildcards = [
    { id: "wildcard-01", category: "Media Spin", text: "A major news network runs a flattering exposé on your campaign. Gain 1 million popular votes." },
    { id: "wildcard-02", category: "Scandal!", text: "An opponent is caught in a minor scandal. They lose 2 million popular votes. You may choose the opponent." },
    { id: "wildcard-03", category: "Economic Boom", text: "The economy is booming! If you are the incumbent, gain 5 electoral votes. Otherwise, no effect." },
    { id: "wildcard-04", category: "Grassroots Movement", text: "A passionate group of volunteers has organized in a swing state. Gain 2 electoral votes in a state of your choice." },
    { id: "wildcard-05", category: "Gaffe", text: "You make an embarrassing gaffe during a debate. Lose 1 million popular votes." },
    { id: "wildcard-06", category: "Celebrity Endorsement", text: "A-list celebrity endorses you. Gain $500,000 in campaign funds and 500,000 popular votes." },
    { id: "wildcard-07", category: "Foreign Policy Crisis", text: "An international crisis develops. If you answer a Government Trivia question correctly, you appear presidential and gain 3 electoral votes. Otherwise, you appear weak and lose 2 electoral votes." },
    { id: "wildcard-08", category: "Negative Ad", text: "Your opponent runs a highly effective negative ad against you. Lose 2 electoral votes in a state of their choice." },
    { id: "wildcard-09", category: "Town Hall Success", text: "You masterfully handle a tough question at a town hall. Gain 1.5 million popular votes." },
    { id: "wildcard-10", category: "Voter Registration Drive", text: "Your party's massive voter registration drive has paid off. Gain 1 electoral vote in three different states." },
    { id: "wildcard-11", category: "Policy Debate", text: "Challenge an opponent to a one-on-one debate on a topic of your choice. If you win the next trivia question from that category, steal 2 electoral votes from them." },
    { id: "wildcard-12", category: "Fundraising Gala", text: "Your fundraising gala is a massive success. Gain $2,000,000 in campaign funds." },
    { id: "wildcard-13", category: "Fact-Check", text: "A leading fact-checker rates your latest claim 'Pants on Fire'. Lose 1 electoral vote and 1 million popular votes." },
    { id: "wildcard-14", category: "Rally Surge", text: "An unexpectedly large crowd at your rally energizes your base. Draw another Wildcard." },
    { id: "wildcard-15", category: "October Surprise", text: "A shocking revelation comes out days before the election. All players must answer a State Trivia question. The first to answer correctly gains 5 electoral votes." }
];


export default function FixWildcardsPage() {
  const [isMigrating, setIsMigrating] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const firestore = useFirestore();
  const auth = useAuth();
  const { hideLoader } = useLoading();

  const handleFixData = async () => {
    if (!firestore || !auth.currentUser) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'You must be logged in to migrate data.',
      });
      hideLoader();
      return;
    }

    setIsMigrating(true);
    toast({
        title: 'Replacing Wildcards...',
        description: 'Please do not close this page.',
    });

    try {
      const batch = writeBatch(firestore);
      const wildcardsCollection = collection(firestore, 'wildcards');
      
      // 1. Delete all existing wildcards
      const existingWildcards = await getDocs(wildcardsCollection);
      existingWildcards.forEach(doc => {
        batch.delete(doc.ref);
      });

      // 2. Add the new, correct wildcards
      wildcards.forEach(wildcard => {
        const docRef = doc(firestore, 'wildcards', wildcard.id);
        batch.set(docRef, wildcard);
      });

      // 3. Commit the batch
      await batch.commit();

      toast({
        title: 'Success!',
        description: 'All wildcards have been replaced with the correct data.',
      });

      // Redirect home after success
      router.push('/');

    } catch (e: any) {
      const permissionError = new FirestorePermissionError({
          path: 'batch operation',
          operation: 'write',
          requestResourceData: { note: 'Batch write to fix wildcards.' },
      });
      errorEmitter.emit('permission-error', permissionError);
    } finally {
        setIsMigrating(false);
        hideLoader();
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Fix Wildcard Data</CardTitle>
          <CardDescription>
            The wildcards in the database are incorrect. Clicking the button below will delete all existing wildcards and replace them with the correct, politically-themed cards for the game.
            This is a one-time operation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={handleFixData}
            disabled={isMigrating}
            className="w-full"
            size="lg"
          >
            {isMigrating ? 'Replacing Data...' : 'Fix Wildcard Data'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
