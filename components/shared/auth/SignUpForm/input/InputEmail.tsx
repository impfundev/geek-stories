"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FormState } from "@/lib/schema";

export function InputEmail({ state }: { state: FormState }) {
  return (
    <>
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
    </>
  );
}
