'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import questionsData from './data/questions.json';
import wildcardsData from './data/wildcards.json';
import rulesData from './data/rules.json';
import { useLoading } from '@/app/context/loading-context';
import Link from 'next/link';
import { useFirestore, setDocumentNonBlocking } from '@/firebase';
import { collection, doc } from 'firebase/firestore';

export default function AdminPage() {
  const { toast } = useToast();
  const { showLoader, hideLoader } = useLoading();
  const [isSeeding, setIsSeeding] = useState(false);
  const firestore = useFirestore();

  const handleSeed = async (
    collectionName: string,
    data: any[],
    collectionLabel: string
  ) => {
    if (!firestore) {
      toast({
        variant: 'destructive',
        title: 'Firestore not available',
        description: 'Please ensure you are connected to Firebase.',
      });
      return;
    }
    setIsSeeding(true);
    showLoader();

    try {
      // Use a non-blocking approach. Errors will be caught by the global error handler.
      data.forEach((item) => {
        if (!item.id) {
          throw new Error('All data items must have an "id" property.');
        }
        const docRef = doc(firestore, collectionName, item.id.toString());
        // This function does not use a try/catch and will allow the permission error to propagate
        setDocumentNonBlocking(docRef, item, { merge: true });
      });

      toast({
        title: 'Success!',
        description: `${collectionLabel} have been seeded. Please allow a moment for data to appear.`,
      });
    } catch (error: any) {
        // This catch block will likely not be hit for permission errors anymore,
        // but is kept for other potential synchronous errors.
        console.error(`Error seeding ${collectionName}:`, error);
        toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: error.message || `Could not seed ${collectionLabel}.`,
        });
    } finally {
        // We don't want to hide the loader immediately, let user see the toast.
        setTimeout(() => {
            setIsSeeding(false);
            hideLoader();
        }, 1500)
    }
  };

  const handleSeedQuestions = () => {
    handleSeed('questions', questionsData, 'Questions');
  };

  const handleSeedWildcards = () => {
    handleSeed('wildcards', wildcardsData, 'Wildcards');
  };

  const handleSeedRules = () => {
    handleSeed('rules', rulesData, 'Rules');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Admin Data Seeding</CardTitle>
          <CardDescription>
            Use these controls to populate the Firestore database with the initial game data.
            This will overwrite any existing data in the collections.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button onClick={handleSeedQuestions} disabled={isSeeding}>
            {isSeeding ? 'Seeding...' : 'Seed Questions'}
          </Button>
          <Button onClick={handleSeedWildcards} disabled={isSeeding}>
            {isSeeding ? 'Seeding...' : 'Seed Wildcards'}
          </Button>
          <Button onClick={handleSeedRules} disabled={isSeeding}>
            {isSeeding ? 'Seeding...' : 'Seed Rules'}
          </Button>
          <div className="text-center pt-4">
            <Button asChild variant="outline">
              <Link href="/">Back to Main Menu</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
