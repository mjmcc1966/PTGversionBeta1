
'use client';

import { useState } from 'react';
import { useFirestore } from '@/firebase';
import { writeBatch, doc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { useRouter } from 'next/navigation';
import { useLoading } from '@/app/context/loading-context';

// Data is embedded directly to avoid file reading complexities
const questions = [
    {
        "id": "1",
        "category": "general_trivia",
        "question": "The President of the United States is limited to how many four-year terms in office?",
        "options": ["One", "Two", "Three", "Four"],
        "correctAnswer": "Two",
        "explanation": "The 22nd Amendment to the U.S. Constitution limits a president to two terms."
    },
    {
        "id": "2",
        "category": "general_trivia",
        "question": "How many members are in the U.S. House of Representatives?",
        "options": ["100", "435", "538", "50"],
        "correctAnswer": "435",
        "explanation": "The number of representatives is fixed at 435 by law."
    },
    {
        "id": "3",
        "category": "general_trivia",
        "question": "What is the minimum age to be elected President of the United States?",
        "options": ["25", "30", "35", "40"],
        "correctAnswer": "35",
        "explanation": "The U.S. Constitution requires a president to be at least 35 years old."
    },
    {
        "id": "4",
        "category": "general_trivia",
        "question": "Which branch of the U.S. government is responsible for interpreting laws?",
        "options": ["Executive", "Legislative", "Judicial", "Administrative"],
        "correctAnswer": "Judicial",
        "explanation": "The Judicial branch, headed by the Supreme Court, interprets the laws."
    },
    {
        "id": "5"
        ,"category": "general_trivia",
        "question": "How long is a U.S. Senator's term?",
        "options": ["2 years", "4 years", "6 years", "8 years"],
        "correctAnswer": "6 years",
        "explanation": "Senators are elected to serve six-year terms."
    }
];

const wildcards = [
    { "id": "1", "category": "General", "text": "Trade one of your states with another player. You cannot refuse." },
    { "id": "2", "category": "General", "text": "Force another player to answer a trivia question. If they get it wrong, you steal one of their states." },
    { "id": "3", "category": "General", "text": "Go to any unowned state on the board and attempt to win it." },
    { "id": "4", "category": "General", "text": "Take $1,000,000 from any other player." },
    { "id": "5", "category": "General", "text": "All other players must give you $500,000." }
];

const rules = [
    {
        "id": "1-general-game-play",
        "title": "General Game Play",
        "content": [
            "The game is played on a map of the United States. Each state has a corresponding electoral vote value.",
            "Players take turns rolling dice and moving around the board.",
            "When a player lands on a state, they have the opportunity to win it by correctly answering a trivia question.",
            "The goal of the game is to be the first player to win a majority of the electoral votes (270)."
        ]
    },
    {
        "id": "2-winning-states",
        "title": "Winning States",
        "content": [
            "To win a state, a player must correctly answer a trivia question from one of three categories: General Trivia, State Trivia, or Government Trivia.",
            "If the player answers correctly, they pay the bank the value of the state in dollars and place their marker on it.",
            "If the player answers incorrectly, their turn ends."
        ]
    },
    {
        "id": "3-wild-cards",
        "title": "Wildcards",
        "content": [
            "If a player lands on a 'Wildcard' space, they draw a card and follow the instructions.",
            "Wildcards can have various effects, such as giving the player an advantage or disadvantaging an opponent."
        ]
    }
];


export default function AdminPage() {
  const firestore = useFirestore();
  const { toast } = useToast();
  const [isMigrating, setIsMigrating] = useState(false);
  const router = useRouter();
  const { showLoader, hideLoader } = useLoading();


  const handleMigrate = async () => {
    if (!firestore) {
      toast({
        title: 'Error',
        description: 'Firestore is not initialized.',
        variant: 'destructive',
      });
      return;
    }

    setIsMigrating(true);
    showLoader();

    try {
      const batch = writeBatch(firestore);

      questions.forEach((question) => {
        const docRef = doc(firestore, 'questions', question.id);
        batch.set(docRef, question);
      });

      wildcards.forEach((wildcard) => {
        const docRef = doc(firestore, 'wildcards', wildcard.id);
        batch.set(docRef, wildcard);
      });

      rules.forEach((rule) => {
        const docRef = doc(firestore, 'rules', rule.id);
        batch.set(docRef, rule);
      });

      await batch.commit();

      toast({
        title: 'Migration Successful!',
        description: 'Game data has been successfully migrated to Firestore.',
      });
      router.push('/');

    } catch (error) {
      // Create the rich, contextual error.
      const permissionError = new FirestorePermissionError({
        path: 'batch operation', // The path for a batch write is not tied to a single document.
        operation: 'write',
        requestResourceData: { note: 'Batch write contains questions, wildcards, and rules.' },
      });
      
      // Emit the error through the global emitter to be caught by FirebaseErrorListener.
      errorEmitter.emit('permission-error', permissionError);

      // This fallback toast will likely be preempted by the Next.js error overlay.
      toast({
        title: 'Migration Failed',
        description: 'Missing or insufficient permissions. Check the browser console or error overlay for more details.',
        variant: 'destructive',
      });

    } finally {
      setIsMigrating(false);
      hideLoader();
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Game Data Migration</CardTitle>
          <CardDescription>
            Click the button below to migrate the initial set of questions, wildcards, and rules to your Firestore database. This only needs to be done once. Ensure you are logged in before proceeding.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={handleMigrate} 
            disabled={isMigrating} 
            className="w-full"
          >
            {isMigrating ? 'Migrating...' : 'Migrate Data to Firestore'}
          </Button>
        </CardContent>
         <CardFooter className="flex justify-center">
            <Button variant="outline" onClick={() => router.push('/')}>
              Back to Main Menu
            </Button>
          </CardFooter>
      </Card>
    </div>
  );
}
