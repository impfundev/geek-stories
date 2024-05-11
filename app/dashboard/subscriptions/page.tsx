import { SubscribeTabs } from "@/components/shared/dashboard/subscription/SubscribeTabs";
import { getSubscriptionPlans, getUser } from "@/lib/action";
import { checkSubscription } from "@/lib/action/subscribePlan";

export default async function Subscription() {
  const { data } = await getSubscriptionPlans();
  const { user } = await getUser();

  if (!user) {
    return null;
  }

  const subscriptionState = await checkSubscription(user.id);

  return <SubscribeTabs plans={data} state={subscriptionState} user={user} />;
}
