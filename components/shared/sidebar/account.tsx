import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUserRound, LogOut } from "lucide-react";

export function Account() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-2 border rounded-lg flex items-center gap-2 justify-center">
        <CircleUserRound size={20} strokeWidth={1} /> Account
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-2 items-center">
          <LogOut size={20} strokeWidth={0.5} absoluteStrokeWidth /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
