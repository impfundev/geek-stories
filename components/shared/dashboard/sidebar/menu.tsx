"use client";

import Link from "next/link";
import {
  Home,
  PenSquare,
  File,
  Tags,
  Settings,
  CalendarCheck2,
  MessageSquareMore,
  Image as ImageIcon,
  KeyIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainMenu() {
  const path = usePathname();
  return (
    <nav className="grid gap-2">
      <Link
        href="/dashboard"
        className={cn(
          "p-1 md:py-2 md:px-4 flex gap-2 items-center justify-center md:justify-start rounded-full hover:text-background hover:bg-primary",
          path === "/dashboard" && "text-background bg-primary"
        )}
      >
        <Home size={20} strokeWidth={1} absoluteStrokeWidth />
        <span className="hidden md:flex">Dashboards</span>
      </Link>
      <Link
        href="/dashboard/posts"
        className={cn(
          "p-1 md:py-2 md:px-4 flex gap-2 items-center justify-center md:justify-start rounded-full hover:text-background hover:bg-primary",
          path === "/dashboard/posts" && "text-background bg-primary"
        )}
      >
        <PenSquare size={20} strokeWidth={1} absoluteStrokeWidth />{" "}
        <span className="hidden md:flex">Posts</span>
      </Link>
      <Link
        href="/dashboard/pages"
        className={cn(
          "p-1 md:py-2 md:px-4 flex gap-2 items-center justify-center md:justify-start rounded-full hover:text-background hover:bg-primary",
          path === "/dashboard/pages" && "text-background bg-primary"
        )}
      >
        <File size={20} strokeWidth={1} absoluteStrokeWidth />{" "}
        <span className="hidden md:flex">Pages</span>
      </Link>
      <Link
        href="/dashboard/tags"
        className={cn(
          "p-1 md:py-2 md:px-4 flex gap-2 items-center justify-center md:justify-start rounded-full hover:text-background hover:bg-primary",
          path === "/dashboard/tags" && "text-background bg-primary"
        )}
      >
        <Tags size={20} strokeWidth={1} absoluteStrokeWidth />{" "}
        <span className="hidden md:flex">Tags</span>
      </Link>
      <Link
        href="/dashboard/media"
        className={cn(
          "p-1 md:py-2 md:px-4 flex gap-2 items-center justify-center md:justify-start rounded-full hover:text-background hover:bg-primary",
          path === "/dashboard/media" && "text-background bg-primary"
        )}
      >
        <ImageIcon size={20} strokeWidth={1} absoluteStrokeWidth />{" "}
        <span className="hidden md:flex">Media</span>
      </Link>
      <Link
        href="/dashboard/comments"
        className={cn(
          "p-1 md:py-2 md:px-4 flex gap-2 items-center justify-center md:justify-start rounded-full hover:text-background hover:bg-primary",
          path === "/dashboard/comments" && "text-background bg-primary"
        )}
      >
        <MessageSquareMore size={20} strokeWidth={1} absoluteStrokeWidth />{" "}
        <span className="hidden md:flex">Comments</span>
      </Link>
      <Link
        href="/dashboard/subscriptions"
        className={cn(
          "p-1 md:py-2 md:px-4 flex gap-2 items-center justify-center md:justify-start rounded-full hover:text-background hover:bg-primary",
          path === "/dashboard/subscriptions" && "text-background bg-primary"
        )}
      >
        <CalendarCheck2 size={20} strokeWidth={1} absoluteStrokeWidth />{" "}
        <span className="hidden md:flex">Subscriptions</span>
      </Link>
    </nav>
  );
}

export function SecondMenu() {
  const path = usePathname();
  return (
    <nav className="flex flex-col gap-2">
      <Link
        href="/dashboard/settings"
        className={cn(
          "p-1 md:py-2 md:px-4 flex gap-2 items-center justify-center md:justify-start rounded-full hover:text-background hover:bg-primary",
          path === "/dashboard/settings" && "text-background bg-primary"
        )}
      >
        <Settings size={20} strokeWidth={1} absoluteStrokeWidth />{" "}
        <span className="hidden md:flex">Settings</span>
      </Link>
      <Link
        href="/dashboard/access"
        className={cn(
          "p-1 md:py-2 md:px-4 flex gap-2 items-center justify-center md:justify-start rounded-full hover:text-background hover:bg-primary",
          path === "/dashboard/access" && "text-background bg-primary"
        )}
      >
        <KeyIcon size={20} strokeWidth={1} absoluteStrokeWidth />{" "}
        <span className="hidden md:flex">API Access</span>
      </Link>
    </nav>
  );
}
