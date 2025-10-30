'use client';

import React from 'react';
import { LoadingProvider } from '@/app/context/loading-context';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import AuthGate from '@/components/AuthGate';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LoadingProvider>
      <FirebaseClientProvider>
        <AuthGate>{children}</AuthGate>
      </FirebaseClientProvider>
    </LoadingProvider>
  );
}
