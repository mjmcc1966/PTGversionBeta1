'use client';

import { useState } from 'react';
import { useFirestore, useUser } from '@/firebase';
import { writeBatch, doc, collection } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

const questions = [
  {
    "id": "1",
    "category": "general_trivia",
    "question": "What is the supreme law of the land in the United States?",
    "options": ["The Declaration of Independence", "The Constitution", "The Bill of Rights", "The Articles of Confederation"],
    "correctAnswer": "The Constitution",
    "explanation": "The U.S. Constitution is the supreme law of the land, establishing the frame of the national government and fundamental laws."
  },
  {
    "id": "2",
    "category": "general_trivia",
    "question": "What do we call the first ten amendments to the Constitution?",
    "options": ["The Articles of Confederation", "The Declaration of Independence", "The Bill of Rights", "The Federalist Papers"],
    "correctAnswer": "The Bill of Rights",
    "explanation": "The first ten amendments to the Constitution are called the Bill of Rights. They guarantee essential rights and civil liberties."
  },
  {
    "id": "3",
    "category": "general_trivia",
    "question": "How many amendments does the Constitution have?",
    "options": ["10", "27", "33", "45"],
    "correctAnswer": "27",
    "explanation": "The Constitution has 27 amendments. The first 10 are the Bill of Rights, and 17 more have been added since."
  },
  {
    "id": "4",
    "category": "general_trivia",
    "question": "The idea of self-government is in the first three words of the Constitution. What are these words?",
    "options": ["We the People", "Congress shall make", "I pledge allegiance", "Four score and"],
    "correctAnswer": "We the People",
    "explanation": "The phrase 'We the People' signifies that the government of the United States was created by and for the people."
  },
  {
    "id": "5",
    "category": "general_trivia",
    "question": "What is one right or freedom from the First Amendment?",
    "options": ["Trial by jury", "Right to bear arms", "Speech", "Right to vote"],
    "correctAnswer": "Speech",
    "explanation": "The First Amendment protects several basic freedoms, including freedom of speech, religion, press, assembly, and petition."
  }
];

const rules = [
  {
    "id": "1",
    "title": "General Game Play",
    "content": [
      "The game is played on a board that mirrors the electoral college map of the United States. Players start in their home state and work their way to Washington D.C.",
      "Players advance by correctly answering trivia questions from various categories. The categories are: General Trivia, State Trivia, and Government Trivia.",
      "The goal is to be the first to reach Washington D.C."
    ]
  },
  {
    "id": "2",
    "title": "Answering Questions",
    "content": [
      "If a player answers a General Trivia question correctly, they win $10,000,000 in campaign funds.",
      "If a player answers a State Trivia question correctly, they win 10 million popular votes.",
      "If a player answers a Government Trivia question correctly, they win the electoral votes of the state they are currently in."
    ]
  },
  {
    "id": "3",
    "title": "Wildcards",
    "content": [
      "Wildcards can be drawn on any turn instead of answering a question.",
      "These cards can have various effects, such as awarding bonus votes, funds, or electoral votes, or creating challenges for opponents."
    ]
  }
];

const wildcards = [
  {
    "id": "1",
    "category": "Campaign Boost",
    "text": "You've received a massive donation! Gain $5,000,000 in campaign funds."
  },
  {
    "id": "2",
    "category": "Scandal",
    "text": "A scandal hits your opponent! Choose an opponent to lose 5 million popular votes."
  },
  {
    "id": "3",
    "category": "Rally",
    "text": "A successful rally has swayed a key state. Win the electoral votes of a state of your choice that is not currently held by any player."
  },
  {
    "id": "4",
    "category": "Endorsement",
    "text": "A popular figure endorses your campaign! Gain 2 million popular votes."
  },
  {
    "id": "5",
    "category": "Travel",
    "text": "Campaign strategy shift! Move to any state on the board."
  }
];

export default function MigratePage() {
  const [isMigrating, setIsMigrating] = useState(false);
  const firestore = useFirestore();
  const { user } = useUser();
  const router = useRouter();
  const { toast } = useToast();

  const handleMigrate = async () => {
    if (!firestore) {
      toast({
        title: 'Error',
        description: 'Firestore is not available.',
        variant: 'destructive',
      });
      return;
    }
    if (!user) {
      toast({
        title: 'Authentication Required',
        description: 'You must be logged in to migrate data.',
        variant: 'destructive',
      });
      router.push('/register');
      return;
    }

    setIsMigrating(true);
    try {
      const batch = writeBatch(firestore);

      // Add Questions
      const questionsCollection = collection(firestore, 'questions');
      questions.forEach((question) => {
        const questionRef = doc(questionsCollection, question.id);
        batch.set(questionRef, question);
      });

      // Add Rules
      const rulesCollection = collection(firestore, 'rules');
      rules.forEach((rule) => {
        const ruleRef = doc(rulesCollection, rule.id);
        batch.set(ruleRef, rule);
      });

      // Add Wildcards
      const wildcardsCollection = collection(firestore, 'wildcards');
      wildcards.forEach((wildcard) => {
        const wildcardRef = doc(wildcardsCollection, wildcard.id);
        batch.set(wildcardRef, wildcard);
      });

      await batch.commit();

      toast({
        title: 'Migration Successful!',
        description: 'All game data has been migrated to Firestore.',
      });
    } catch (error) {
       console.error("Migration failed:", error);
       const permissionError = new FirestorePermissionError({
          path: 'batch operation', // Batch writes don't have a single path
          operation: 'write',
          requestResourceData: { note: 'Batch write contains questions, wildcards, and rules.' }
        });
        errorEmitter.emit('permission-error', permissionError);
    } finally {
      setIsMigrating(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Data Migration</CardTitle>
          <CardDescription>
            Click the button below to migrate the initial game data (questions, rules, and wildcards) to your Firestore database. This only needs to be done once.
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
        <CardFooter>
            <Button variant="outline" onClick={() => router.push('/')} className="w-full">
              Back to Main Menu
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
