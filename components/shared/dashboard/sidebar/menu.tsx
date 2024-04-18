"use client";

import Link from "next/link";
import {
  Home,
  PenSquare,
  File,
  Tags,
  Settings,
  ExternalLink,
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
        <Home size={20} strokeWidth={1} absoluteStrokeWidth /> Home
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
        href="#"
        className={cn(
          "py-2 px-4 flex gap-2 items-center rounded-full hover:text-background hover:bg-primary",
          path === "#" && "text-background bg-primary"
        )}
      >
        <ExternalLink size={20} strokeWidth={1} absoluteStrokeWidth /> View site
      </Link>
    </nav>
  );
}
