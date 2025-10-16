
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/lib/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, updateDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('password'); // Use a fixed password
  const [activationCode, setActivationCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleAuth = async () => {
    setError(null);
    if (!email) {
      setError('Email is required.');
      return;
    }

    try {
      // First, try to sign in. This handles existing users.
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (signInError: any) {
      // If sign-in fails because the user doesn't exist, proceed with registration.
      if (signInError.code === 'auth/user-not-found' || signInError.code === 'auth/invalid-credential') {
        if (!firstName || !activationCode) {
          setError('First name and activation code are required for new registration.');
          return;
        }
        if (activationCode.length !== 16) {
          setError('Activation code must be 16 characters long.');
          return;
        }

        try {
          // Check activation code
          const codeRef = doc(db, 'activationCodes', activationCode);
          const codeSnap = await getDoc(codeRef);

          if (!codeSnap.exists()) {
            setError('Invalid activation code.');
            return;
          }

          const codeData = codeSnap.data();
          if (codeData.uses >= 5) {
            setError('This activation code has already been used the maximum number of times.');
            return;
          }

          // Create user with email and password
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;

          // Store user info in Firestore
          await setDoc(doc(db, 'users', user.uid), {
            firstName,
            email,
            activationCode,
            createdAt: serverTimestamp(),
          });

          // Update activation code usage
          await updateDoc(codeRef, {
            uses: codeData.uses + 1,
          });
          
          // The user is automatically signed in after createUserWithEmailAndPassword
          router.push('/'); // Redirect to home on successful registration

        } catch (registerError: any) {
          if (registerError.code === 'auth/email-already-in-use') {
             setError('This email is already in use. Try logging in.');
          } else {
             setError(registerError.message);
          }
        }
      } else {
        // Handle other sign-in errors
        setError(signInError.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Register or Login</CardTitle>
          <CardDescription>Enter your email to log in, or fill all fields to register.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name (for new registration)</Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
            />
          </div>
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
            <Label htmlFor="activationCode">Activation Code (for new registration)</Label>
            <Input
              id="activationCode"
              value={activationCode}
              onChange={(e) => setActivationCode(e.target.value)}
              placeholder="Enter your 16-character code"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </CardContent>
        <CardFooter className="flex-col items-stretch">
          <Button onClick={handleAuth} className="w-full">Continue</Button>
           <p className="text-xs text-muted-foreground text-center mt-2">
            Already have an account? Just enter your email and click continue to log in.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
