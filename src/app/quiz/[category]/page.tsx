
import Link from 'next/link';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QuizClient } from './quiz-client';

export function generateStaticParams() {
  return [
    { category: 'general-trivia' },
    { category: 'state-trivia' },
    { category: 'government-trivia' },
    { category: 'custom-trivia' },
  ];
}

async function QuizPage({ params }: { params: { category: string } }) {
  const resolvedParams = await params;
  const categoryName = decodeURIComponent(resolvedParams.category).replace(/-/g, ' ');

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 relative font-headline text-foreground">
      <Link href="/" className="absolute top-4 left-4" aria-label="Return to home page">
        <Button variant="ghost" className="hover:bg-primary/10">
          <Home className="mr-2 h-5 w-5" />
          Home
        </Button>
      </Link>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold capitalize text-primary">
          {categoryName}
        </h1>
        <p className="text-muted-foreground text-lg">Test Your Knowledge</p>
      </div>
      <QuizClient category={resolvedParams.category} />
    </main>
  );
}

export default QuizPage;
