"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function LoginForm() {
  return (
    <form className="relative w-full max-w-md mx-auto flex flex-col justify-center">
      <Card className="rounded-2xl bg-background/75 backdrop-blur-md">
        <CardHeader>
          <CardTitle>Log In</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
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
          <Button type="submit" variant="outline" className="w-full">
            Log In
          </Button>
          <p className="text-sm">
            Don't have an account?{" "}
            <Link href="/register" className="underline">
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
      <span className="absolute inset-0 blur w-full md:w-[400px] bg-gradient-to-r from-background to-foreground rounded-full opacity-30 -z-50 animate-pulse"></span>
    </form>
  );
}
