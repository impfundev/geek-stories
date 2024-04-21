import { getGravatarUrl, GravatarOptions } from "react-awesome-gravatar";
import { LifeBuoy, LogOut, Settings, User } from "lucide-react";
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
    <div className="w-full grid gap-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Image
              alt={user.userName}
              src={pictureUrl}
              width={24}
              height={24}
              className="w-6 h-6 rounded-full object-cover"
              loading="lazy"
            />
            <span className="truncate">{user.userName}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>{user.userName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
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
