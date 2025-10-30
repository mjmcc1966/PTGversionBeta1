'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the QuizClient component with SSR turned off
const QuizClient = dynamic(() => import('./quiz-client').then(mod => mod.QuizClient), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-2xl mx-auto text-center">
      <p className="text-lg text-muted-foreground">Loading Quiz...</p>
    </div>
  ),
});

export function QuizLoader({ category }: { category: string }) {
  return <QuizClient category={category} />;
}
