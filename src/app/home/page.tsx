'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Map, Scale, HelpCircle, Shuffle, Home as HomeIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const categories = [
    { name: (<div>General Trivia<br />$10,000,000</div>), href: '/quiz/general_trivia', icon: <Brain className="w-6 h-6" /> },
    { name: (<div>State Trivia<br />10 Million Popular Votes</div>), href: '/quiz/state-trivia', icon: <Map className="w-6 h-6" /> },
    { name: (<div>Government Trivia<br />Electoral Votes</div>), href: '/quiz/government-trivia', icon: <Scale className="w-6 h-6" /> },
    { name: 'Custom User Questions', href: '/quiz/custom-trivia', icon: <HelpCircle className="w-6 h-6" /> },
  ];

  const handleWildcardClick = () => {
    router.push('/wildcard');
  };

  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md relative">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Politics: The Game</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {categories.map((category) => (
              <Button asChild key={category.href} className="w-full h-20 text-xl justify-start" variant="outline">
                <Link href={category.href}>
                  <div className="flex items-center space-x-4">
                    {category.icon}
                    <span>{category.name}</span>
                  </div>
                </Link>
              </Button>
            ))}
             <Button onClick={handleWildcardClick} className="w-full h-20 text-xl justify-start" variant="destructive">
              <div className="flex items-center space-x-4">
                <Shuffle className="w-6 h-6" />
                <span>Wildcards</span>
              </div>
            </Button>
          </CardContent>
          <CardFooter className="justify-between">
            <Button onClick={handleBackClick} variant="outline">
              <HomeIcon className="mr-2 h-4 w-4" />
              Main Menu
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
