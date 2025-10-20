'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Landmark, Scale, Upload } from 'lucide-react';
import { UploadQuestionsDialog } from '@/components/upload-questions-dialog';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const categories = [
    { name: (<div>General Trivia<br/>$10,000,000</div>), href: '/quiz/general-trivia', icon: <BrainCircuit className="w-6 h-6" /> },
    { name: (<div>State Trivia<br/>10 Million Popular Votes</div>), href: '/quiz/state-trivia', icon: <Landmark className="w-6 h-6" /> },
    { name: (<div>Government Trivia<br/>Electoral Votes</div>), href: '/quiz/government-trivia', icon: <Scale className="w-6 h-6" /> },
  ];

  const [isUploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Welcome to Politics: The Game!</CardTitle>
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
            {isClient && (
              <Button onClick={() => setUploadDialogOpen(true)} className="w-full h-20 text-xl justify-start" variant="outline">
                <div className="flex items-center space-x-4">
                  <Upload className="w-6 h-6" />
                  <span><div>Upload Custom Questions<br/>The Popular Vote</div></span>
                </div>
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
      {isClient && <UploadQuestionsDialog isOpen={isUploadDialogOpen} onOpenChange={setUploadDialogOpen} />}
    </div>
  );
}
