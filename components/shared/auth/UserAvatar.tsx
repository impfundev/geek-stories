import { Button } from "../../ui/button";
import Image from "next/image";
import Link from "next/link";

import { getGravatarUrl, GravatarOptions } from "react-awesome-gravatar";

export function UserAvatar({ email }: { email: string }) {
  const pictureOptions: GravatarOptions = {
    size: 100,
  };
  const pictureUrl = getGravatarUrl(email, pictureOptions);
  return (
    <fieldset className="flex flex-col gap-6 items-center">
      <Image
        src={pictureUrl}
        alt={`${email} Avatar`}
        width={100}
        height={100}
        className="rounded-full"
      />
      <Button type="button" asChild>
        <Link href={"https://gravatar.com/"} target="_blank">
          Change Picture
        </Link>
      </Button>
    </fieldset>
  );
}
