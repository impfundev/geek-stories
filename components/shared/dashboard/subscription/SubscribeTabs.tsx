import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plans } from "./Plans";
import type { Subscription, User } from "@prisma/client";
import { ActivePlan } from "./ActivePlan";
import { PaymentHistory } from "./PaymentHistory";
import moment from "moment";
import Link from "next/link";

interface SubscribeTabsProps {
  plans: Subscription[];
  user: User;
}

export function SubscribeTabs({ plans, user }: SubscribeTabsProps) {
  const activePlan = plans.find((plan) => plan.id === user.subscription_id);
  const subscribeEndAt = moment(user.subscribeEndAt?.getTime()).format(
    "MMMM Do YYYY, h:mm:ss a"
  );
  const now = new Date();
  const subscriptionExpired = now > user.subscribeEndAt!;

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
        {activePlan && !subscriptionExpired && (
          <>
            <p>Your subscription is active until {subscribeEndAt}</p>
            <ActivePlan plan={activePlan} />
          </>
        )}
        {user.subscribeEndAt && subscriptionExpired && (
          <>
            <p>Your subscription has expired, extend or choose another plan:</p>
            <Plans userId={user.id} plans={plans} />
          </>
        )}
        {!activePlan && !user.subscribeEndAt && (
          <>
            <p>Your on demo plan, try choose another plan:</p>
            <Plans userId={user.id} plans={plans} />
          </>
        )}
      </TabsContent>
      <TabsContent value="payment">
        <PaymentHistory />
      </TabsContent>
    </Tabs>
  );
}
