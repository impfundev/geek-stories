"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Subscription } from "@prisma/client";
import type { Benefit } from "@/lib/type";
import { payWithSnap } from "@/lib/action/snapPayments";
import { SubmitButton } from "../../auth/SubmitButton";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { subscribePlan } from "@/lib/action/subscribePlan";
import { Skeleton } from "@/components/ui/skeleton";
import { getClientSideCookie } from "@/lib/cookie";

interface PlansProps {
  plans: Subscription[];
  userId: string;
}

export function Plans({ plans, userId }: PlansProps) {
  const params = useSearchParams();
  const paymentId = params.get("order_id");
  const paymentStatus = params.get("transaction_status");
  const planId = getClientSideCookie("plan_id");

  const [mounted, isMounted] = useState(false);

  useEffect(() => {
    if (paymentId && paymentStatus && planId)
      subscribePlan({
        paymentId,
        userId,
        paymentStatus,
        planId: Number(planId),
      }).then(() => isMounted(true));

    isMounted(true);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan, i) => {
        const benefit = plan.benefit as Benefit;
        return (
          <Card key={i}>
            {mounted ? (
              <form
                action={payWithSnap}
                className="flex flex-col justify-between drop-shadow-lg"
              >
                <div>
                  <input
                    id="gross_amount"
                    name="gross_amount"
                    value={plan.price}
                    hidden
                    readOnly
                  />
                  <input
                    id="planId"
                    name="planId"
                    value={plan.id}
                    hidden
                    readOnly
                  />
                  <CardHeader className="gap-1">
                    <CardTitle className="capitalize">{plan.type}</CardTitle>
                    <CardTitle>
                      <span className="text-3xl">
                        {plan.type === "enterprise"
                          ? plan.price
                          : `Rp. ${plan.price}`}
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
                      {benefit.data.map((benefit, i) => (
                        <li
                          key={i}
                          className="mb-4 grid grid-cols-[25px_1fr] items-center pb-4 last:mb-0 last:pb-0"
                        >
                          <span className="flex h-2 w-2 rounded-full bg-sky-500" />
                          <span>{benefit.label}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <CardFooter>
                  <SubmitButton type="submit" className="w-full">
                    Start Plan
                  </SubmitButton>
                </CardFooter>
              </form>
            ) : (
              <Skeleton className="w-full h-full min-h-[500px]" />
            )}
          </Card>
        );
      })}
    </div>
  );
}
