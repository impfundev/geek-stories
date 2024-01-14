import Link from "next/link";
import { Account } from "./account";
import { Menu } from "./menu";
import { Separator } from "@/components/ui/separator";
import { Settings, ExternalLink } from "lucide-react";

export function Sidebar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <aside className="w-[16vw] flex flex-col border-r">
      <div className="flex flex-col p-2 w-full">
        <Account />
      </div>
      <Separator />
      <div className="flex flex-col p-2 w-full">
        <Menu />
      </div>
      <Separator />
      <div className="flex flex-col p-2 w-full">
        <div className="flex flex-col gap-2">
          <Link
            href="/dashboard/settings"
            className="p-2 flex gap-2 items-center rounded-lg hover:bg-secondary focus:bg-secondary"
          >
            <Settings size={20} strokeWidth={1} absoluteStrokeWidth /> Settings
          </Link>
          <Link
            href="#"
            className="p-2 flex gap-2 items-center rounded-lg hover:bg-secondary focus:bg-secondary"
          >
            <ExternalLink size={20} strokeWidth={1} absoluteStrokeWidth /> Go to
            site
          </Link>
        </div>
      </div>
    </aside>
  );
}
