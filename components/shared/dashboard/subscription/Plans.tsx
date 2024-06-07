"use client";

import type { Subscription } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { CardPlan } from "./CardPlan";
import { useSubscribe } from "@/lib/subscribe";

type PlansProps = {
  plans: Subscription[];
};

export function Plans({ plans }: PlansProps) {
  const params = useSearchParams();
  const paymentId = params.get("order_id");
  const paymentStatus = params.get("transaction_status");
  const subscribe = useSubscribe({ paymentId, paymentStatus });

  useEffect(() => {
    subscribe.catch((err) => console.error(err));
  }, [subscribe]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => {
        return <CardPlan key={plan.id} plan={plan} />;
      })}
    </div>
  );
}
