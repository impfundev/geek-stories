import { AccessPanel } from "@/components/shared/dashboard/access";
import { getApiKey } from "@/lib/action";
import { verifySession } from "@/lib/session";

export default async function Access() {
  const { userId } = await verifySession();
  const { apiKey } = await getApiKey(userId as string);
  return (
    <div className="w-full grid gap-6">
      <h1>API Access</h1>
      <AccessPanel apiKey={apiKey.value} />
    </div>
  );
}
