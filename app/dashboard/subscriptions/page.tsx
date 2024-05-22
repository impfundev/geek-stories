import { SubscribeTabs } from "@/components/shared/dashboard/subscription/SubscribeTabs";
import { getSubscriptionPlans, getUsers } from "@/lib/action";

export default async function Subscription() {
  const { plans } = await getSubscriptionPlans();
  const { users } = await getUsers();

  return <SubscribeTabs plans={plans} subscribers={users} />;
}
