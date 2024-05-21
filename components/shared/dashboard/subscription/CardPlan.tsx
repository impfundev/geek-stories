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

import type { Subscription } from "@prisma/client";
import { SubmitButton } from "../../auth/SubmitButton";
import { Button } from "@/components/ui/button";
import { deletePlan, updatePlanStatus } from "@/lib/action";
import { EditPlanDialog } from "./EditPlanDialog";
import { Benefit } from "@/lib/type";
import { currencyFormater } from "./currencyFormater";

type CardPlan = {
  plan: Subscription;
};

export function CardPlan({ plan }: CardPlan) {
  const benefit = plan.benefit as Benefit[];
  const price = currencyFormater(Number(plan.price));
  return (
    <Card
      className={`drop-shadow-lg ${
        !plan.isActive && "text-muted-foreground"
      } flex flex-col justify-between`}
    >
      <CardHeader className="gap-1">
        <CardTitle className="capitalize">{plan.type}</CardTitle>
        <CardTitle>
          <span className="text-3xl">{price}</span>
        </CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <ul>
          {benefit &&
            benefit.map((benefit, i) => (
              <li
                key={i}
                className="mb-4 grid grid-cols-[25px_1fr] items-center pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 rounded-full bg-sky-500" />
                <span>{benefit?.value}</span>
              </li>
            ))}
        </ul>
      </CardContent>
      <CardFooter className="flex-col justify-between gap-4">
        {plan.isActive ? (
          <form action={payWithSnap} className="w-full">
            <input
              id="gross_amount"
              name="gross_amount"
              value={plan.price}
              hidden
              readOnly
            />
            <input id="planId" name="planId" value={plan.id} hidden readOnly />
            <SubmitButton className="w-full">Test Payment</SubmitButton>
          </form>
        ) : (
          <Button disabled className="w-full">
            Plan is disabled
          </Button>
        )}
        <form className="w-full" action={updatePlanStatus}>
          <input name="planId" value={plan.id} hidden readOnly />
          <input
            id="planStatus"
            name="planStatus"
            value={String(plan.isActive)}
            hidden
            readOnly
          />
          <SubmitButton className="w-full">
            {plan.isActive ? "Deactivate" : "Activate"} Plan
          </SubmitButton>
        </form>
        <EditPlanDialog plan={plan} />
        <form action={deletePlan} className="w-full">
          <input
            id="gross_amount"
            name="gross_amount"
            value={plan.price}
            hidden
            readOnly
          />
          <input id="planId" name="planId" value={plan.id} hidden readOnly />
          <SubmitButton className="w-full bg-red-500">Delete Plan</SubmitButton>
        </form>
      </CardFooter>
    </Card>
  );
}
