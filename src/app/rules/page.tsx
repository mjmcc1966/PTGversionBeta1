
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { useLoading } from '@/app/context/loading-context';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, orderBy, query, DocumentData } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';

interface Rule extends DocumentData {
    id: string;
    title: string;
    content: string[];
}

export default function RulesPage() {
  const { showLoader, hideLoader } = useLoading();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const firestore = useFirestore();
  
  const rulesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'rules'), orderBy('id'));
  }, [firestore]);

  const { data: rulesData, isLoading: rulesLoading } = useCollection<Rule>(rulesQuery);

  useEffect(() => {
    hideLoader();
  }, [pathname, searchParams, hideLoader]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Politics: The Game - The Rules</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-left">
            {rulesLoading ? (
                <div className="space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-8 w-1/2 mt-6" />
                    <Skeleton className="h-4 w-full" />
                </div>
            ) : rulesData && rulesData.length > 0 ? (
                rulesData.map((rule) => (
                    <div key={rule.id}>
                        <h2 className="text-2xl font-semibold mb-2 text-destructive" dangerouslySetInnerHTML={{ __html: rule.title }}/>
                        {rule.content.map((paragraph, index) => (
                            <p key={index} className="text-muted-foreground mt-2" dangerouslySetInnerHTML={{ __html: paragraph }} />
                        ))}
                    </div>
                ))
            ) : (
                <CardDescription>No rules found. Please migrate the data from the admin page.</CardDescription>
            )}
          
          <div className="text-center pt-4">
            <Button asChild variant="outline" onClick={showLoader}>
              <Link href="/">Back to Main Menu</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
