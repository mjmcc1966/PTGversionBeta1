
import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { Providers } from './providers'; // Import the new Providers component

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
        {/* Use the new Providers component to wrap the children */}
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
