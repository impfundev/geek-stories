import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plans } from "./Plans";
import type { Benefit, Subscription, User } from "@prisma/client";
import { PaymentHistory } from "./PaymentHistory";
import moment from "moment";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type plan = Subscription & { benefit: Benefit[] };

interface SubscribeTabsProps {
  plans: plan[];
  user: User;
}

export function SubscribeTabs({ plans, user }: SubscribeTabsProps) {
  const activePlan = plans.find((plan) => plan.id === user.subscription_id);
  const subscribeEndAt = moment(user.subscribeEndAt?.getTime()).format(
    "MMMM Do YYYY, h:mm:ss a"
  );
  const subscribeStartAt = moment(user.subscribeStartAt?.getTime()).format(
    "MMMM Do YYYY, h:mm:ss a"
  );

  return (
    <Tabs defaultValue="subscription" className="w-full py-4">
      <TabsList>
        <TabsTrigger value="subscription">Subscription</TabsTrigger>
        <TabsTrigger value="payment">Payment</TabsTrigger>
      </TabsList>
      <TabsContent value="subscription" className="flex flex-col gap-4">
        <p>
          This Subscription feature is only for testing needs. Payments are made
          using{" "}
          <Link
            href={"https://docs.midtrans.com/docs/testing-payment-on-sandbox"}
            className="underline"
            target="_blank"
          >
            Midtrans testing payment on Sandbox
          </Link>
        </p>
        {activePlan && (
          <div className="py-4 border-y">
            Your test payment on <Badge>{subscribeStartAt}</Badge> success, the
            plan is active until <Badge>{subscribeEndAt}</Badge>
          </div>
        )}
        <Plans plans={plans} />
      </TabsContent>
      <TabsContent value="payment">
        <PaymentHistory />
      </TabsContent>
    </Tabs>
  );
}
