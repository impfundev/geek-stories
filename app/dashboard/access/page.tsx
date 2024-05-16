import { AccessPanel } from "@/components/shared/dashboard/access";
import { getApiKey } from "@/lib/action";
import { verifySession } from "@/lib/session";

export default async function Access() {
  const { userId } = await verifySession();
  const { apiKey } = await getApiKey(userId as string);
  return (
    <>
      <h1>API Access</h1>
      <AccessPanel apiKey={apiKey.value} />
    </>
  );
}
