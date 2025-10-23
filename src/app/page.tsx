
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLoading } from '@/app/context/loading-context';

export default function BasePage() {
  const router = useRouter();
  const { showLoader } = useLoading();

  const handleExpansionClick = () => {
    alert('Expansion packs are not yet available.');
  };

  const handleStartGame = () => {
    showLoader();
    router.push('/home');
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Politics: The Game</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button asChild className="w-full h-20 text-xl justify-center" variant="outline" onClick={showLoader}>
            <Link href="/rules">Rules of Game Play</Link>
          </Button>
          <Button asChild className="w-full h-20 text-xl justify-center" variant="outline" onClick={showLoader}>
            <Link href="/admin">Admin Page</Link>
          </Button>
          <Button onClick={handleExpansionClick} className="w-full h-20 text-xl justify-center" variant="outline">
            Buy an Expansion Pack
          </Button>
          <Button onClick={handleStartGame} className="w-full h-20 text-xl justify-center">
            Start the Game
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
