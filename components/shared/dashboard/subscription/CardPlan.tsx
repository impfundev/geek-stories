"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { payWithSnap } from "@/lib/action/snapPayments";

import type { Benefit, Subscription } from "@prisma/client";
import { SubmitButton } from "../../auth/SubmitButton";

type CardPlan = {
  plan: Subscription & { benefit: Benefit[] };
};

export function CardPlan({ plan }: CardPlan) {
  return (
    <Card className="drop-shadow-lg">
      <form action={payWithSnap} className="flex flex-col justify-between">
        <div>
          <input
            id="gross_amount"
            name="gross_amount"
            value={plan.price}
            hidden
            readOnly
          />
          <input id="planId" name="planId" value={plan.id} hidden readOnly />
          <CardHeader className="gap-1">
            <CardTitle className="capitalize">{plan.type}</CardTitle>
            <CardTitle>
              <span className="text-3xl">
                {plan.type === "enterprise" ? plan.price : `Rp. ${plan.price}`}
              </span>{" "}
              {plan.type !== "hobby" && (
                <span className="text-lg text-muted-foreground">
                  per user / month
                </span>
              )}
            </CardTitle>
            <CardDescription>{plan.description}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <ul>
              {plan.benefit.map((benefit) => (
                <li
                  key={benefit.id}
                  className="mb-4 grid grid-cols-[25px_1fr] items-center pb-4 last:mb-0 last:pb-0"
                >
                  <span className="flex h-2 w-2 rounded-full bg-sky-500" />
                  <span>{benefit.value}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <SubmitButton>Test Payment</SubmitButton>
          </CardFooter>
        </div>
      </form>
    </Card>
  );
}
