'use client';

import * as React from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Eye, EyeOff } from 'lucide-react';
import { useFirebase } from '@/firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function SignupPage() {
  const router = useRouter();
  const { auth, user, isUserLoading } = useFirebase();

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleGoogleSignIn = async () => {
    if (!auth) {
      setError('Auth service not available.');
      return;
    }
    const provider = new GoogleAuthProvider();
    setIsSubmitting(true);
    try {
      await signInWithPopup(auth, provider);
      router.push('/hr/employee-dashboard');
    } catch (error) {
      setError('Failed to sign in with Google.');
      setIsSubmitting(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    if (!auth) {
        setError("Auth service not available. Please try again later.");
        setIsSubmitting(false);
        return;
    }

    if (password.length < 6) {
        setError("Password must be at least 6 characters long.");
        setIsSubmitting(false);
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        if (userCredential.user) {
          router.push('/hr/employee-dashboard');
        }
    } catch (err: any) {
        let errorMessage = "An unknown error occurred.";
        if (err.code) {
            switch (err.code) {
                case "auth/email-already-in-use":
                    errorMessage = "This email address is already in use.";
                    break;
                case "auth/invalid-email":
                    errorMessage = "Please enter a valid email address.";
                    break;
                case "auth/weak-password":
                    errorMessage = "The password is too weak.";
                    break;
                default:
                    errorMessage = "Failed to create an account. Please try again.";
                    break;
            }
        }
        setError(errorMessage);
        setIsSubmitting(false);
    }
  };

  if (isUserLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-10rem)]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] p-4">
        <Card className="mx-auto max-w-sm w-full">
        <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
            Enter your information to create an account
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSignup} className="grid gap-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Max" required value={firstName} onChange={e => setFirstName(e.target.value)} disabled={isSubmitting} />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Robinson" required value={lastName} onChange={e => setLastName(e.target.value)} disabled={isSubmitting} />
                </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={isSubmitting}
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? 'text' : 'password'} 
                    required 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    disabled={isSubmitting}
                    className="pr-10"
                  />
                   <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute inset-y-0 right-0 h-full px-3"
                    onClick={() => setShowPassword(prev => !prev)}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                    <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
                  </Button>
                </div>
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Create an account'}
            </Button>
            <Button variant="outline" className="w-full" disabled={isSubmitting} onClick={handleGoogleSignIn}>
                Sign up with Google
            </Button>
            </form>
            <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
                Log in
            </Link>
            </div>
        </CardContent>
        </Card>
    </div>
  );
}
