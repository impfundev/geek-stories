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
import type { Subscription } from "@prisma/client";

// import { CheckboxPlan } from "@/components/shared/dashboard/subscription/CheckboxPlan";
// import { RadioGroup } from "@/components/ui/radio-group";
// import { useState } from "react";

export function SignUpForm({ plans }: { plans: Subscription[] }) {
  const [state, action] = useFormState(signUp, undefined);

  // for subscribe on sign up (Testing)
  // const [plan, setPlan] = useState(plans[0].type);

  return (
    <form className="relative w-full max-w-xl mx-auto flex flex-col justify-center">
      <Card className="rounded-2xl bg-background/75 backdrop-blur-md">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent className="grid w-full items-center gap-4">
          <InputUserName state={state} />
          <InputEmail state={state} />
          <InputPassword state={state} />
          {/* <input id="planType" name="planType" hidden value={plan} readOnly />
          <RadioGroup
            defaultValue={plan}
            onValueChange={setPlan}
            className="flex gap-6 items-start"
          >
            {plans.map((plan) => (
              <CheckboxPlan key={plan.id} plan={plan} />
            ))}
          </RadioGroup> */}
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <p className="text-sm">
            To avoid filling the database in the live demo version, sign up is
            disabled.
            <Link href="/login" className="underline">
              Log In with Demo Account
            </Link>
          </p>
          <SubmitButton disabled className="w-full">
            Sign Up
          </SubmitButton>
          {state?.message && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>{state?.message}</AlertDescription>
            </Alert>
          )}
        </CardFooter>
      </Card>
    </form>
  );
}
