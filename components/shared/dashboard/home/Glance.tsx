import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Comments, Page, PostType, Tags } from "@/lib/models/schema";
import {
  PenSquare,
  File,
  Tags as TagsIcon,
  MessageSquareMore,
} from "lucide-react";
import Link from "next/link";

type Glance = {
  totalPost: number;
  totalPages: number;
  totalTags: number;
  totalComments: number;
};

export function Glance({
  totalPost,
  totalPages,
  totalTags,
  totalComments,
}: Glance) {
  return (
    <Card className="drop-shadow-lg">
      <CardHeader>
        <CardTitle>At a glance</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="w-full p-6 grid grid-cols-2 justify-between gap-6">
        <Link
          href="/dashboard/posts"
          className="flex gap-2 items-center hover:underline"
        >
          <PenSquare size={20} strokeWidth={1} absoluteStrokeWidth />{" "}
          {totalPost} Posts
        </Link>
        <Link
          href="/dashboard/pages"
          className="flex gap-2 items-center hover:underline"
        >
          <File size={20} strokeWidth={1} absoluteStrokeWidth /> {totalPages}{" "}
          Pages
        </Link>
        <Link
          href="/dashboard/tags"
          className="flex gap-2 items-center hover:underline"
        >
          <TagsIcon size={20} strokeWidth={1} absoluteStrokeWidth /> {totalTags}{" "}
          Tags
        </Link>
        <Link
          href="/dashboard/comments"
          className="flex gap-2 items-center hover:underline"
        >
          <MessageSquareMore size={20} strokeWidth={1} absoluteStrokeWidth />{" "}
          {totalComments} Comments
        </Link>
      </CardContent>
    </Card>
  );
}
