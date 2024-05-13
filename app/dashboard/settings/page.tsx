import { SiteSettingsForm } from "@/components/shared/dashboard/settings/SiteSetingsForm";
import { getSiteInfo } from "@/lib/action/getSiteInfo";
import { verifySession } from "@/lib/session";

export default async function Settings() {
  const { userId } = await verifySession();
  const { siteInfo } = await getSiteInfo();

  return (
    <SiteSettingsForm
      userId={userId as string}
      siteInfo={siteInfo || undefined}
    />
  );
}
