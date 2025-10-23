'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

export default function AdminPage() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Admin Page</CardTitle>
          <CardDescription>
            This page is for administrative tasks. The application is currently configured to load data from local files, so database seeding is not required.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
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
