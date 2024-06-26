import { getGravatarUrl, GravatarOptions } from "react-awesome-gravatar";
import { LogOut, User } from "lucide-react";
import { getUser, logout } from "@/lib/action";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export async function Account() {
  const { error, user } = await getUser();

  if (error || !user) {
    return (
      <div className="w-full flex justify-between">
        <span>{error}</span>
      </div>
    );
  }

  const pictureOptions: GravatarOptions = {
    size: 24,
  };
  const pictureUrl = getGravatarUrl(user.email, pictureOptions);

  return (
    <div className="w-full flex flex-col gap-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Image
              alt={user.userName}
              src={pictureUrl}
              width={24}
              height={24}
              className="md:w-6 md:h-6 rounded-full object-cover"
              loading="lazy"
            />
            <span className="hidden md:flex truncate">{user.userName}</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>{user.userName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href={"/dashboard/profile"}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile Settings</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <form action={logout}>
              <button type="submit" className="w-full flex">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
