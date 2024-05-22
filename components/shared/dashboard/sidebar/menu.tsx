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
    <nav className="flex flex-col gap-2">
      <Link
        href="/dashboard"
        className={cn(
          "py-2 px-4 flex gap-2 items-center rounded-full hover:text-background hover:bg-primary",
          path === "/dashboard" && "text-background bg-primary"
        )}
      >
        <Home size={20} strokeWidth={1} absoluteStrokeWidth /> Dashboards
      </Link>
      <Link
        href="/dashboard/posts"
        className={cn(
          "py-2 px-4 flex gap-2 items-center rounded-full hover:text-background hover:bg-primary",
          path === "/dashboard/posts" &&
            "animate-in fade-in-30 text-background bg-primary"
        )}
      >
        <PenSquare size={20} strokeWidth={1} absoluteStrokeWidth /> Posts
      </Link>
      <Link
        href="/dashboard/pages"
        className={cn(
          "py-2 px-4 flex gap-2 items-center rounded-full hover:text-background hover:bg-primary",
          path === "/dashboard/pages" && "text-background bg-primary"
        )}
      >
        <File size={20} strokeWidth={1} absoluteStrokeWidth /> Pages
      </Link>
      <Link
        href="/dashboard/tags"
        className={cn(
          "py-2 px-4 flex gap-2 items-center rounded-full hover:text-background hover:bg-primary",
          path === "/dashboard/tags" && "text-background bg-primary"
        )}
      >
        <Tags size={20} strokeWidth={1} absoluteStrokeWidth /> Tags
      </Link>
      <Link
        href="/dashboard/media"
        className={cn(
          "py-2 px-4 flex gap-2 items-center rounded-full hover:text-background hover:bg-primary",
          path === "/dashboard/media" && "text-background bg-primary"
        )}
      >
        <ImageIcon size={20} strokeWidth={1} absoluteStrokeWidth /> Media
      </Link>
      <Link
        href="/dashboard/comments"
        className={cn(
          "py-2 px-4 flex gap-2 items-center rounded-full hover:text-background hover:bg-primary",
          path === "/dashboard/comments" && "text-background bg-primary"
        )}
      >
        <MessageSquareMore size={20} strokeWidth={1} absoluteStrokeWidth />{" "}
        Comments
      </Link>
      <Link
        href="/dashboard/subscriptions"
        className={cn(
          "py-2 px-4 flex gap-2 items-center rounded-full hover:text-background hover:bg-primary",
          path === "/dashboard/subscriptions" && "text-background bg-primary"
        )}
      >
        <CalendarCheck2 size={20} strokeWidth={1} absoluteStrokeWidth />{" "}
        Subscriptions
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
          "py-2 px-4 flex gap-2 items-center rounded-full hover:text-background hover:bg-primary",
          path === "/dashboard/settings" && "text-background bg-primary"
        )}
      >
        <Settings size={20} strokeWidth={1} absoluteStrokeWidth /> Settings
      </Link>
      <Link
        href="/dashboard/access"
        className={cn(
          "py-2 px-4 flex gap-2 items-center rounded-full hover:text-background hover:bg-primary",
          path === "/dashboard/access" && "text-background bg-primary"
        )}
      >
        <KeyIcon size={20} strokeWidth={1} absoluteStrokeWidth /> API Access
      </Link>
    </nav>
  );
}
