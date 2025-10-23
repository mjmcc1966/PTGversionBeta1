'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, useFirestore } from '@/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  AuthErrorCodes,
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
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();
  const auth = useAuth();
  const db = useFirestore();

  const handleLogout = async () => {
    if (!auth) return;
    try {
      await signOut(auth);
      setMessage("You have been successfully logged out.");
      setError(null);
    } catch (e: any) {
      setError(e.message);
      setMessage(null);
    }
  }

  const handleRegister = async () => {
    setError(null);
    setMessage(null);
    if (!auth || !db) {
      setError('Firebase services are not available.');
      return;
    }
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    try {
      // First, forcefully sign out any lingering user.
      await signOut(auth);
      
      // Then, try to create a new user.
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user info in Firestore.
      await setDoc(
        doc(db, 'users', user.uid),
        {
          email,
          createdAt: serverTimestamp(),
        },
        { merge: true }
      );

      router.push('/'); // Redirect to home on successful registration.
    } catch (registerError: any) {
       // If the error is that the email is already in use, try to sign them in.
       if (registerError.code === AuthErrorCodes.EMAIL_EXISTS) {
         try {
           await signInWithEmailAndPassword(auth, email, password);
           router.push('/'); // Redirect on successful login
         } catch (loginError: any) {
           setError(loginError.message);
         }
       } else {
         // For any other registration error, display it.
         setError(registerError.message);
       }
    }
  };

  const handleLogin = async () => {
    setError(null);
    setMessage(null);
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
          {message && <p className="text-green-500 text-sm">{message}</p>}
        </CardContent>
        <CardFooter className="flex-col items-stretch space-y-2">
          <Button onClick={handleLogin} className="w-full">
            Login
          </Button>
          <Button onClick={handleRegister} className="w-full">
            Register
          </Button>
           <Button onClick={handleLogout} className="w-full" variant="outline">
            Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
