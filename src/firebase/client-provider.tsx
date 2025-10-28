
'use client';

import React, { useMemo, type ReactNode } from 'react';
import { FirebaseProvider } from '@/firebase/provider';
import { initializeApp, getApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { initializeFirestore, memoryLocalCache, type Firestore } from 'firebase/firestore';
import { firebaseConfig } from './config';

interface FirebaseServices {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

// This function ensures Firebase is initialized only once.
function getFirebaseServices(): FirebaseServices {
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const auth = getAuth(app);
  // Pass cache settings to initializeFirestore to prevent re-initialization errors on the client.
  const firestore = initializeFirestore(app, {
    localCache: memoryLocalCache(),
  });
  return { app, auth, firestore };
}

export function FirebaseClientProvider({ children }: { children: ReactNode }) {
  // useMemo ensures that getFirebaseServices is called only once per client session.
  const firebaseServices = useMemo(() => getFirebaseServices(), []);

  return (
    <FirebaseProvider
      firebaseApp={firebaseServices.app}
      auth={firebaseServices.auth}
      firestore={firebaseServices.firestore}
    >
      {children}
    </FirebaseProvider>
  );
}
