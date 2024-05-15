import { SignUpForm } from "@/components/shared/auth/SignUpForm";
import { getSubscriptionPlans } from "@/lib/action";

export default async function LoginPage() {
  const plans = await getSubscriptionPlans();
  return (
    <main className="flex items-center justify-center min-h-screen p-6">
      <SignUpForm plans={plans.data} />
    </main>
  );
}
