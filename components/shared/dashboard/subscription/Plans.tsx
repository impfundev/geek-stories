"use client";

import type { Benefit, Subscription } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { subscribePlan } from "@/lib/action/subscribePlan";
import { CardPlan } from "./CardPlan";

type plan = Subscription & { benefit: Benefit[] };

type PlansProps = {
  plans: plan[];
};

export function Plans({ plans }: PlansProps) {
  const params = useSearchParams();
  const paymentId = params.get("order_id");
  const paymentStatus = params.get("transaction_status");

  useEffect(() => {
    async function subscribe() {
      if (paymentId && paymentStatus)
        await subscribePlan({
          paymentId,
          paymentStatus,
        });
    }

    subscribe().catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => {
        return <CardPlan key={plan.id} plan={plan} />;
      })}
    </div>
  );
}
