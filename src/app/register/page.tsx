'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, useFirestore } from '@/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  linkWithCredential,
  EmailAuthProvider,
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const auth = useAuth();
  const db = useFirestore();

  const handleRegister = async () => {
    setError(null);
    if (!auth || !db) {
      setError('Firebase services are not available.');
      return;
    }
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    try {
      let user;
      // CORRECTLY get the currentUser directly from the auth instance
      const currentUser = auth.currentUser;

      // If the current user is anonymous, link the new credentials
      if (currentUser && currentUser.isAnonymous) {
        const credential = EmailAuthProvider.credential(email, password);
        const userCredential = await linkWithCredential(currentUser, credential);
        user = userCredential.user;
      } else {
        // Otherwise, create a new user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        user = userCredential.user;
      }

      // Store/update user info in Firestore using the final UID
      await setDoc(
        doc(db, 'users', user.uid),
        {
          email,
          createdAt: serverTimestamp(),
        },
        { merge: true }
      );

      router.push('/'); // Redirect to home on successful registration/linking
    } catch (registerError: any) {
      // If linking fails because the email is already in use, try to sign in
      if (registerError.code === 'auth/email-already-in-use') {
         try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/');
         } catch (signInError: any) {
            setError(signInError.message);
         }
      } else {
        setError(registerError.message);
      }
    }
  };

  const handleLogin = async () => {
    setError(null);
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }
    if (!auth) {
      setError('Firebase Auth is not available');
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (loginError: any) {
      setError(loginError.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Register or Login</CardTitle>
          <CardDescription>
            Enter your email and password to log in or create an account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </CardContent>
        <CardFooter className="flex-col items-stretch space-y-2">
          <Button onClick={handleLogin} className="w-full">
            Login
          </Button>
          <Button onClick={handleRegister} className="w-full" variant="outline">
            Register
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
