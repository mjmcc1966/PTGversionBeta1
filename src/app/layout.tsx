
import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { LoadingProvider } from '@/app/context/loading-context';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import AuthGate from '@/components/AuthGate';

export const metadata: Metadata = {
  title: 'PTG - Personal Trivia Game',
  description: 'A personal trivia game to test your knowledge.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased h-full">
        <FirebaseClientProvider>
          <LoadingProvider>
            <AuthGate>
              {children}
            </AuthGate>
          </LoadingProvider>
        </FirebaseClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
