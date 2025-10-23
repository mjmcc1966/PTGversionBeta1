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
import { seedData } from '@/app/admin/actions';

export default function AdminPage() {
  const { toast } = useToast();
  const { showLoader, hideLoader } = useLoading();
  const [isSeeding, setIsSeeding] = useState(false);

  const handleSeed = async (
    collectionName: string,
    data: any[],
    collectionLabel: string
  ) => {
    setIsSeeding(true);
    showLoader();

    try {
      await seedData({ collection: collectionName, data });
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
