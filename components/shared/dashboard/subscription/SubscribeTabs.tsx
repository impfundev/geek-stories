import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plans } from "./Plans";
import type { Plans as PlansType } from "@/lib/type";

export function SubscribeTabs({ plans }: { plans: PlansType[] }) {
  return (
    <Tabs defaultValue="subscription" className="w-full py-4">
      <TabsList>
        <TabsTrigger value="subscription">Subscription</TabsTrigger>
        <TabsTrigger value="payment">Payment</TabsTrigger>
      </TabsList>
      <TabsContent value="subscription" className="flex flex-col gap-4">
        <p>You don't have any subscriptions at this time. Choose your plan:</p>
        <Plans plans={plans} />
      </TabsContent>
      <TabsContent value="payment">
        See your payment status and history here.
      </TabsContent>
    </Tabs>
  );
}
