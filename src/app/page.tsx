import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Landmark, Scale } from 'lucide-react';

export default function Home() {
  const categories = [
    { name: 'General Trivia', href: '/quiz/general-trivia', icon: <BrainCircuit className="w-6 h-6" /> },
    { name: 'State Trivia', href: '/quiz/state-trivia', icon: <Landmark className="w-6 h-6" /> },
    { name: 'Government Trivia', href: '/quiz/government-trivia', icon: <Scale className="w-6 h-6" /> },
  ];

  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract background of colorful geometric shapes"
          layout="fill"
          objectFit="cover"
          data-ai-hint="trivia quiz"
          priority
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      <main className="flex min-h-screen w-full items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-2xl bg-card/80 backdrop-blur-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl md:text-5xl font-headline tracking-wider text-primary">
              PTG
            </CardTitle>
            <p className="text-muted-foreground font-headline">Personal Trivia Game</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              {categories.map((category) => (
                <Link key={category.name} href={category.href} passHref>
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full justify-start text-lg py-8 font-headline shadow-lg transition-transform hover:scale-105"
                  >
                    <div className="mr-4">{category.icon}</div>
                    {category.name}
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
