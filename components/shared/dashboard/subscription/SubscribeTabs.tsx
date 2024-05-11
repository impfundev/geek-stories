import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plans } from "./Plans";
import type { Subscription, User } from "@prisma/client";
import { ActivePlan } from "./ActivePlan";

interface SubscribeTabsProps {
  plans: Subscription[];
  state: {
    isSubscribed: boolean;
    message: string;
  };
  user: User;
}

export function SubscribeTabs({ plans, state, user }: SubscribeTabsProps) {
  const activePlan = plans.find((plan) => plan.id === user.subscription_id);

  return (
    <Tabs defaultValue="subscription" className="w-full py-4">
      <TabsList>
        <TabsTrigger value="subscription">Subscription</TabsTrigger>
        <TabsTrigger value="payment">Payment</TabsTrigger>
      </TabsList>
      <TabsContent value="subscription" className="flex flex-col gap-4">
        {state.isSubscribed && activePlan ? (
          <>
            <p>{state.message}</p>
            <ActivePlan plan={activePlan} />
          </>
        ) : (
          <>
            <p>{state.message}</p>
            <Plans userId={user.id} plans={plans} />
          </>
        )}
      </TabsContent>
      <TabsContent value="payment">
        See your payment status and history here.
      </TabsContent>
    </Tabs>
  );
}
