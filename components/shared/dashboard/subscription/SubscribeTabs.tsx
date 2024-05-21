import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plans } from "./Plans";
import type { Subscription, User } from "@prisma/client";
import { PaymentHistory } from "./PaymentHistory";
import Link from "next/link";
import { CreatePlanDialog } from "./CreatePlanDialog";

interface SubscribeTabsProps {
  plans: Subscription[];
  user: User;
}

export function SubscribeTabs({ plans, user }: SubscribeTabsProps) {
  return (
    <Tabs defaultValue="plans" className="w-full py-4">
      <TabsList>
        <TabsTrigger value="plans">Plans</TabsTrigger>
        <TabsTrigger value="payment">Payment</TabsTrigger>
      </TabsList>
      <TabsContent value="plans" className="flex flex-col gap-4">
        <p>
          {" "}
          Payments are made using Snap from Midtrans Payment Gateaway. For
          testing, use{" "}
          <Link
            href={"https://docs.midtrans.com/docs/testing-payment-on-sandbox"}
            className="underline"
            target="_blank"
          >
            Midtrans Payment Simulator
          </Link>{" "}
          to pay the bill.
        </p>
        <CreatePlanDialog />
        <Plans plans={plans} />
      </TabsContent>
      <TabsContent value="payment">
        <PaymentHistory />
      </TabsContent>
    </Tabs>
  );
}
