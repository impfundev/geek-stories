import Link from "next/link";
import { Home, PenSquare, File, Tags } from "lucide-react";

export function Menu() {
  return (
    <nav className="flex flex-col gap-2">
      <Link
        href="/dashboard"
        className="p-2 flex gap-2 items-center rounded-lg hover:bg-secondary focus:bg-secondary"
      >
        <Home size={20} strokeWidth={1} absoluteStrokeWidth /> Home
      </Link>
      <Link
        href="/dashboard/posts"
        className="p-2 flex gap-2 items-center rounded-lg hover:bg-secondary focus:bg-secondary"
      >
        <PenSquare size={20} strokeWidth={1} absoluteStrokeWidth /> Posts
      </Link>
      <Link
        href="/dashboard/pages"
        className="p-2 flex gap-2 items-center rounded-lg hover:bg-secondary focus:bg-secondary"
      >
        <File size={20} strokeWidth={1} absoluteStrokeWidth /> Pages
      </Link>
      <Link
        href="/dashboard/tags"
        className="p-2 flex gap-2 items-center rounded-lg hover:bg-secondary focus:bg-secondary"
      >
        <Tags size={20} strokeWidth={1} absoluteStrokeWidth /> Tags
      </Link>
    </nav>
  );
}
