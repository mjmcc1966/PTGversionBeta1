
'use client';

import { useState } from 'react';
import { useFirestore } from '@/firebase';
import { collection, writeBatch, doc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import questionsData from './data/questions.json';
import wildcardsData from './data/wildcards.json';
import rulesData from './data/rules.json';
import { useLoading } from '@/app/context/loading-context';
import Link from 'next/link';

type Question = typeof questionsData[0];
type Wildcard = typeof wildcardsData[0];
type Rule = typeof rulesData[0];

export default function AdminPage() {
  const firestore = useFirestore();
  const { toast } = useToast();
  const { showLoader, hideLoader } = useLoading();
  const [isSeeding, setIsSeeding] = useState(false);

  const seedCollection = async <T extends { id: string }>(
    collectionName: string,
    data: T[],
    collectionLabel: string
  ) => {
    if (!firestore) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Firestore is not initialized.',
      });
      return;
    }

    setIsSeeding(true);
    showLoader();

    try {
      const collectionRef = collection(firestore, collectionName);
      const batch = writeBatch(firestore);

      data.forEach((item) => {
        const docRef = doc(collectionRef, item.id);
        batch.set(docRef, item);
      });

      await batch.commit();
      toast({
        title: 'Success!',
        description: `${collectionLabel} have been seeded successfully.`,
      });
    } catch (error: any) {
      console.error(`Error seeding ${collectionName}:`, error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: error.message || `Could not seed ${collectionLabel}.`,
      });
    } finally {
      setIsSeeding(false);
      hideLoader();
    }
  };

  const handleSeedQuestions = () => {
    seedCollection<Question>('questions', questionsData, 'Questions');
  };

  const handleSeedWildcards = () => {
    seedCollection<Wildcard>('wildcards', wildcardsData, 'Wildcards');
  };

  const handleSeedRules = () => {
    seedCollection<Rule>('rules', rulesData, 'Rules');
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
