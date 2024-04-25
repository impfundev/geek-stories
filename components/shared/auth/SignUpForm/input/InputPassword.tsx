"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FormState } from "@/lib/models/schema";

export function InputPassword({ state }: { state: FormState }) {
  return (
    <>
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
      {state?.errors?.password ? (
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
      ) : (
        <>
          <span className="text-sm">Password must:</span>
          <ul className="list-inside list-disc">
            <li>
              <span className="text-sm">be at least 8 characters long.</span>
            </li>
            <li>
              <span className="text-sm">Contain at least one letter.</span>
            </li>
            <li>
              <span className="text-sm">Contain at least one number.</span>
            </li>
            <li>
              <span className="text-sm">
                Contain at least one special character.
              </span>
            </li>
          </ul>
        </>
      )}
    </>
  );
}
