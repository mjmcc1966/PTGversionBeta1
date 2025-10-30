'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useLoading } from '@/app/context/loading-context';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { db } from '@/lib/firebase';
import { collection, getDocs } from "firebase/firestore";

interface Rule {
    id: string;
    title: string;
    content: string[];
}

export default function RulesPage() {
  const { showLoader, hideLoader } = useLoading();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [rulesData, setRulesData] = useState<Rule[]>([]);
  const [rulesLoading, setRulesLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    hideLoader();
  }, [pathname, searchParams, hideLoader]);

  useEffect(() => {
    const fetchRules = async () => {
      setRulesLoading(true);
      const rulesCollection = collection(db, 'rules');
      const rulesSnapshot = await getDocs(rulesCollection);
      const rulesList = rulesSnapshot.docs.map(doc => doc.data()) as Rule[];
      const sortedRules = rulesList.sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10));
      setRulesData(sortedRules);
      setRulesLoading(false);
    };

    fetchRules();
  }, []);

  const filteredRules = rulesData.filter(rule => {
    if (!searchTerm) return true;
    const searchTermLower = searchTerm.toLowerCase();
    const titleMatch = rule.title.toLowerCase().includes(searchTermLower);
    const contentMatch = rule.content.some(paragraph => paragraph.toLowerCase().includes(searchTermLower));
    return titleMatch || contentMatch;
  });

  const getHighlightedText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return { __html: text };
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    const newText = text.replace(regex, '<mark style="background-color: yellow; color: black;">$1</mark>');
    return { __html: newText };
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Politics: The Game - The Rules</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-left">
            <div className="mb-6">
              <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            {rulesLoading ? (
                <div className="space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-8 w-1/2 mt-6" />
                    <Skeleton className="h-4 w-full" />
                </div>
            ) : filteredRules.length > 0 ? (
                filteredRules.map((rule) => (
                    <div key={rule.id}>
                        <h2 className="text-2xl font-semibold mb-2 text-primary" dangerouslySetInnerHTML={getHighlightedText(rule.title, searchTerm)}/>
                        {rule.content.map((paragraph, index) => (
                            <p key={index} className="text-muted-foreground mt-2" dangerouslySetInnerHTML={getHighlightedText(paragraph, searchTerm)} />
                        ))}
                    </div>
                ))
            ) : (
                <CardDescription>No rules found matching your search term.</CardDescription>
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
