
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useUser, useFirestore } from '@/firebase';
import { writeBatch, doc, collection } from 'firebase/firestore';
import { triviaData } from '@/lib/data/questions';
import { wildcards } from '@/lib/data/wildcards';
import { rulesData } from '@/lib/data/rules';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function MigratePage() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [isMigrating, setIsMigrating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleMigrate = async () => {
    setIsMigrating(true);
    setError(null);

    if (!firestore) {
      const msg = 'Firestore is not initialized.';
      setError(msg);
      toast({ title: 'Error', description: msg, variant: 'destructive' });
      setIsMigrating(false);
      return;
    }
     if (!user) {
      const msg = 'You must be logged in to perform this action.';
      setError(msg);
      toast({ title: 'Authentication Error', description: msg, variant: 'destructive' });
      setIsMigrating(false);
      return;
    }

    try {
      console.log('Starting migration...');
      const batch = writeBatch(firestore);

      // Migrate Questions
      console.log('Migrating questions...');
      Object.entries(triviaData).forEach(([category, questions]) => {
        questions.forEach((q) => {
          const questionData = { ...q, category: category.replace(/-/g, '_')};
          const docRef = doc(firestore, 'questions', String(q.id));
          batch.set(docRef, questionData);
        });
      });
      console.log('Questions queued for batch.');
      
      // Migrate Wildcards
      console.log('Migrating wildcards...');
      wildcards.forEach((w) => {
        const docRef = doc(firestore, 'wildcards', String(w.id));
        batch.set(docRef, w);
      });
      console.log('Wildcards queued for batch.');

      // Migrate Rules
      console.log('Migrating rules...');
      rulesData.forEach((r) => {
          const docRef = doc(firestore, 'rules', r.id);
          batch.set(docRef, r)
      });
      console.log('Rules queued for batch.');


      await batch.commit();
      console.log('Batch commit successful!');

      toast({
        title: 'Migration Complete!',
        description: 'All questions, wildcards, and rules have been migrated to Firestore.',
      });
    } catch (error: any) {
      console.error('Migration failed:', error);
      setError(`Migration Failed: ${error.message}. Check browser console for more details.`);
      toast({
        title: 'Migration Failed',
        description: error.message || 'An unknown error occurred.',
        variant: 'destructive',
      });
    } finally {
      setIsMigrating(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Database Migration</CardTitle>
                <CardDescription>
                    {user ? 
                    'Click the button below to migrate all game data (questions, wildcards, and rules) into your secure Firestore database. This only needs to be done once.' :
                    'You must be logged in to migrate data. Please register or log in first.'
                    }
                </CardDescription>
            </CardHeader>
            <CardContent>
                 {user ? (
                    <Button onClick={handleMigrate} disabled={isMigrating} className="w-full">
                        {isMigrating ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Migrating...
                            </>
                        ) : (
                            'Migrate Data to Firestore'
                        )}
                    </Button>
                 ) : (
                    <Button asChild className="w-full">
                        <Link href="/register">Login to Migrate</Link>
                    </Button>
                 )}
                 {error && (
                    <p className="mt-4 text-sm font-medium text-destructive">{error}</p>
                 )}
            </CardContent>
             <CardFooter>
                <Button variant="outline" asChild>
                    <Link href="/">Back to Main Menu</Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  );
}
