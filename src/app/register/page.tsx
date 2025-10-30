'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, useFirestore, useFunctions } from '@/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  AuthErrorCodes,
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';
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
  const [activationCode, setActivationCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();
  const auth = useAuth();
  const db = useFirestore();
  const functions = useFunctions();

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
    if (!auth || !db || !functions) {
      setError('Firebase services are not available.');
      return;
    }
    if (!email || !password || !activationCode) {
      setError('Email, password, and activation code are required.');
      return;
    }

    try {
      const verifyActivationCode = httpsCallable(functions, 'verifyActivationCode');
      await verifyActivationCode({ code: activationCode });

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const updateActivationCodeOnRegister = httpsCallable(functions, 'updateActivationCodeOnRegister');
      await updateActivationCodeOnRegister({ code: activationCode, userId: user.uid });

      await setDoc(
        doc(db, 'users', user.uid),
        {
          email,
          createdAt: serverTimestamp(),
          activationCode,
        },
        { merge: true }
      );

      router.push('/'); 
    } catch (error: any) {
       if (error.code === 'auth/email-already-in-use') {
         try {
           await signInWithEmailAndPassword(auth, email, password);
           router.push('/');
         } catch (loginError: any) {
           setError(loginError.message);
         }
       } else {
         setError(error.message);
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
          <div className="space-y-2">
            <Label htmlFor="activation-code">Activation Code</Label>
            <Input
              id="activation-code"
              type="text"
              value={activationCode}
              onChange={(e) => setActivationCode(e.target.value)}
              placeholder="Enter your 16-digit code"
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
