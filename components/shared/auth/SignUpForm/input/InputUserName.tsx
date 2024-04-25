"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FormState } from "@/lib/models/schema";

export function InputUserName({ state }: { state: FormState }) {
  return (
    <>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="userName">Username</Label>
        <Input
          id="userName"
          type="text"
          name="userName"
          placeholder="Enter your username"
          maxLength={50}
          required
        />
      </div>
      {state?.errors?.userName ? (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>{state?.errors?.userName}</AlertDescription>
        </Alert>
      ) : (
        <span className="text-sm">
          Username must be at least 8 characters long.
        </span>
      )}
    </>
  );
}
