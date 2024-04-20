"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { signUp } from "@/lib/action";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "./submit-button";

import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function SignUpForm() {
  const [state, action] = useFormState(signUp, undefined);

  return (
    <form
      action={action}
      className="relative w-full max-w-md mx-auto flex flex-col justify-center"
    >
      <Card className="rounded-2xl bg-background/75 backdrop-blur-md">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="userName">Username</Label>
              <Input
                id="userName"
                type="text"
                name="userName"
                placeholder="Enter your username"
                required
              />
            </div>
            {state?.errors?.userName && (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>{state?.errors?.userName}</AlertDescription>
              </Alert>
            )}

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            {state?.errors?.email && (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>{state?.errors?.email}</AlertDescription>
              </Alert>
            )}

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your strong password"
                required
              />
            </div>
            {state?.errors?.password && (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  <p>Password must:</p>
                  <ul>
                    {state.errors.password.map((error) => (
                      <li key={error}>- {error}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <SubmitButton className="w-full">Sign Up</SubmitButton>
          {state?.message && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>{state?.message}</AlertDescription>
            </Alert>
          )}
          <p className="text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Log In
            </Link>
          </p>
        </CardFooter>
      </Card>
      <span className="absolute inset-0 blur w-full md:w-[400px] bg-gradient-to-r from-background to-foreground rounded-full opacity-30 -z-50 animate-pulse"></span>
    </form>
  );
}
