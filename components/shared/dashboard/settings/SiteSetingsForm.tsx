"use client";

import { updateSiteInfo } from "@/lib/action/updateSiteInfo";
import { useFormState } from "react-dom";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle } from "lucide-react";
import { SubmitButton } from "../../auth/SubmitButton";
import type { Site_Info } from "@prisma/client";
import Image from "next/image";

export function SiteSettingsForm({
  userId,
  siteInfo,
}: {
  userId: string;
  siteInfo?: Site_Info;
}) {
  const [state, action] = useFormState(updateSiteInfo, undefined);

  return (
    <form action={action} className="py-6 flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl">Site Information</h1>
          <p className="text-muted-foreground max-w-md">
            This is information about your site. This can also be used as
            information related to your site when it appears on search engines
            like Google.
          </p>
        </div>
        <SubmitButton>Save Changes</SubmitButton>
      </div>
      {state?.message && (
        <Alert>
          {state.status === "warning" ? (
            <>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>{state.status}</AlertTitle>
            </>
          ) : (
            <>
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>{state.status}</AlertTitle>
            </>
          )}
          <AlertDescription>{state?.message}</AlertDescription>
        </Alert>
      )}
      <input id="user_id" name="user_id" value={userId} hidden readOnly />
      <fieldset className="flex flex-col gap-3">
        <Label htmlFor="site_name">Site Name</Label>
        <span className="text-muted-foreground">
          The name of your site. This can be used as the meta title on Google as
          well.
        </span>
        <Input
          id="site_name"
          name="site_name"
          defaultValue={siteInfo?.name || undefined}
          placeholder="My Awesome Apps"
          maxLength={32}
        />
        <span className="text-muted-foreground">
          Please use 32 characters maximum.
        </span>
      </fieldset>
      <fieldset className="flex flex-col gap-3">
        <Label htmlFor="site_description">Description</Label>
        <span className="text-muted-foreground">
          The description of your site. This can be used as the meta description
          on Google as well.
        </span>
        <Input
          id="site_description"
          name="site_description"
          defaultValue={siteInfo?.description || undefined}
          placeholder="e.g. CNN, View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com."
          maxLength={160}
        />
        <span className="text-muted-foreground">
          Include SEO-optimized keywords that you want to rank for. Please use
          160 characters maximum.
        </span>
      </fieldset>
      <fieldset className="flex flex-col gap-3">
        <Label htmlFor="site_logo">Logo</Label>
        <span className="text-muted-foreground">
          The logo for your site. This can be used as favicon on Google as well.
        </span>
        {siteInfo?.logo && (
          <Image
            width={480}
            height={360}
            alt="Site Logo"
            src={siteInfo.logo}
            className="my-4 w-[250px] h-[250px] rounded-full object-cover"
            loading="lazy"
          />
        )}
        <Input
          id="site_logo"
          name="site_logo"
          type="file"
          maxLength={32}
          accept=".jpg,.jpeg,.png,.webp,.ico"
        />
        <span className="text-muted-foreground">
          Accepted formats: .jpg, .jpeg, .png, .webp, .ico
          <br />
          Max Dimmension: 150 x 150 px
        </span>
      </fieldset>
    </form>
  );
}
