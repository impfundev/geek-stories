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

import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { SubmitButton } from "@/components/shared/auth/SubmitButton";
import { InputEmail, InputPassword, InputUserName } from "./input";

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
        <CardContent className="grid w-full items-center gap-4">
          <InputUserName state={state} />
          <InputEmail state={state} />
          <InputPassword state={state} />
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
