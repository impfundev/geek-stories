"use client";

import { useFormState } from "react-dom";
import { login } from "@/lib/action";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SubmitButton } from "./SubmitButton";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function LoginForm() {
  const [state, action] = useFormState(login, undefined);

  return (
    <form
      action={action}
      className="relative w-full max-w-md mx-auto flex flex-col justify-center"
    >
      <Card className="rounded-2xl bg-background/75 backdrop-blur-md">
        <CardHeader>
          <CardTitle>Log In</CardTitle>
          <div className="p-6 grid gap-4">
            <span>Use this demo account:</span>
            <ul className="grid gap-2">
              <li>
                Email: <Badge>demo@demo.com</Badge>
              </li>
              <li>
                Password: <Badge>Demoaccount123?</Badge>
              </li>
            </ul>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                maxLength={50}
                placeholder="Enter your email"
                defaultValue={"demo@demo.com"}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your strong password"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <SubmitButton className="w-full">Log in</SubmitButton>
          {state?.message && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>{state?.message}</AlertDescription>
            </Alert>
          )}
        </CardFooter>
      </Card>
      <span className="absolute inset-0 blur w-full md:w-[400px] bg-gradient-to-r from-background to-foreground rounded-full opacity-30 -z-50 animate-pulse"></span>
    </form>
  );
}
