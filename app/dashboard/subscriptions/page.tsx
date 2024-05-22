import { SubscribeTabs } from "@/components/shared/dashboard/subscription/SubscribeTabs";
import { getSubscriptionPlans, getUsers } from "@/lib/action";

export default async function Subscription() {
  const { plans } = await getSubscriptionPlans();
  const { users } = await getUsers();
  const subscribers = users.filter((user) => user.subscription !== null)

  return <SubscribeTabs plans={plans} subscribers={subscribers} />;
}
