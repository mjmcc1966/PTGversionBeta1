'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { useLoading } from '@/app/context/loading-context';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, writeBatch, getDocs, query, doc } from 'firebase/firestore';
import wildcardData from '../lib/wildcard-data.json';

export default function AdminPage() {
    const { hideLoader } = useLoading();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isSeeding, setIsSeeding] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    useEffect(() => {
        hideLoader();
    }, [pathname, searchParams, hideLoader]);

    const handleSeedWildcards = async () => {
        setIsSeeding(true);
        setFeedbackMessage('Seeding...');
        try {
            const wildcardsCollection = collection(db, 'wildcards');
            const q = query(wildcardsCollection);
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                setFeedbackMessage('The \'wildcards\' collection already contains data.');
                return;
            }

            const batch = writeBatch(db);
            wildcardData.forEach((wildcard) => {
                // Use the id from the JSON file if it exists, otherwise create a new one
                const docRef = wildcard.id ? doc(db, 'wildcards', wildcard.id) : doc(collection(db, 'wildcards'));
                batch.set(docRef, wildcard);
            });

            await batch.commit();
            setFeedbackMessage('The \'wildcards\' collection has been seeded successfully!');

        } catch (error) {
            console.error("Error seeding wildcards:", error);
            setFeedbackMessage('There was a problem seeding the wildcards. Check the console for details.');
        } finally {
            setIsSeeding(false);
        }
    };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Admin Page</CardTitle>
          <CardDescription>
            Use the buttons below to manage your application data.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
            <Button onClick={handleSeedWildcards} disabled={isSeeding}>
                {isSeeding ? 'Seeding...' : 'Seed Wildcards'}
            </Button>
            {feedbackMessage && <p className="text-sm text-center text-muted-foreground">{feedbackMessage}</p>}
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
