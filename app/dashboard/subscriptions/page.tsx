import { SubscribeTabs } from "@/components/shared/dashboard/subscription/SubscribeTabs";
import { getSubscriptionPlans, getUser } from "@/lib/action";

export default async function Subscription() {
  const { plans } = await getSubscriptionPlans();
  const { user } = await getUser();

  if (!user) {
    return null;
  }

  return <SubscribeTabs plans={plans} user={user} />;
}
