import { SubscribeTabs } from "@/components/shared/dashboard/subscription/SubscribeTabs";
import { getSubscriptionPlans } from "@/lib/action";

export default async function Subscription() {
  const { data } = await getSubscriptionPlans();
  return <SubscribeTabs plans={data} />;
}
