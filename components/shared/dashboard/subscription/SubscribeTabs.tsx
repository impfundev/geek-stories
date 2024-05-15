import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plans } from "./Plans";
import type { Subscription, User } from "@prisma/client";
import { ActivePlan } from "./ActivePlan";
import { PaymentHistory } from "./PaymentHistory";
import moment from "moment";

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
        {activePlan && (
          <>
            <p>Your subscription is active until {subscribeEndAt}</p>
            <ActivePlan plan={activePlan} />
          </>
        )}
        {subscriptionExpired && (
          <>
            <p>Your subscription has expired, extend or choose another plan:</p>
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
