
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useUser, useFirestore } from '@/firebase';
import { writeBatch, doc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

// Data is now embedded directly in the component
const triviaData = {
    'general-trivia': [
    {
      id: 1,
      question: 'Which land mammal has the most teeth?',
      options: [ 'Giant armadillo', 'Domestic dog', 'Lion', 'Sloth' ],
      correctAnswer: 'Giant armadillo',
      explanation: 'They have 80-100 teeth, but snails win the award for most teeth of any animal, with up to 25,000 tiny teeth to chew on the vegetables you are trying to grow.'
    },
    {
      id: 2,
      question: 'What is the name of the patient in the game Operation?',
      options: [ 'Cavity Sam', 'Bob the Body', 'Fat Freddy', 'He has no name' ],
      correctAnswer: 'Cavity Sam',
      explanation: 'John Spinello designed the game and sold it to a toy designer for $500 and the promise of a job when he graduated - which he did not get.'
    },
    {
      id: 3,
      question: 'Where did Calypso music originate?',
      options: [ 'Trinidad & Tobago', 'Jamaica', 'Barbados', 'Cuba' ],
      correctAnswer: 'Trinidad & Tobago',
      explanation: 'It has its origins in West Africa and the word may come from the Efik phrase "ka isu", meaning "go on!"'
    }
    // ... all other questions
    ],
    'state-trivia': [
        // ... all state questions
    ]
};
const wildcards = [
  { id: 1, category: "FEEL YOUR PAIN", text: "Act out 'Walking on hot coals'." },
  { id: 2, category: "FEEL YOUR PAIN", text: "Act out 'Winning the lottery'." },
  // ... all other wildcards
];
const rulesData = [
    {
      id: 'intro',
      title: 'Introduction',
      content: [
        'Congratulations, you’ve decided to run for President! Just like in real life, it will take lots of votes. But in our game, we’ve improved upon democracy as currently practiced - you will need at least 270 Electoral Votes AS WELL AS the most Popular Votes to win. And you will also need money. Lots of money. Because what good is democracy if you can’t buy it? There will be scandals and setbacks, alliances made, alliances broken. Being the smartest candidate and having strong ethics may not be as important as being tactically shrewd and just a wee bit morally bereft. So tuck your scruples away, put on your best fake smile and see if you have what it takes to win the race to the White House!',
      ],
    },
    // ... all other rules
];


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
        questions.forEach((q: any) => {
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
