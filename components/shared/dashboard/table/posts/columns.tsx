import moment from "moment";
import { ArrowUpDown, Trash, Loader2 } from "lucide-react";
import { TableData } from "@/lib/models/schema";
import { ColumnDef, Row } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { deletePost } from "@/lib/action/deletePost";
import { useFormState, useFormStatus } from "react-dom";
import type { Tags } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const columns: ColumnDef<TableData>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <Link
        href={`/editor/posts/${row.getValue("id")}`}
        className="text-blue-600 font-bold text-lg"
      >
        {row.getValue("title")}
      </Link>
    ),
  },
  {
    accessorKey: "published",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("published")}</div>
    ),
  },
  {
    accessorKey: "author",
    header: "Author",
    cell: ({ row }) => {
      const author: any = row.getValue("author");
      return <p>{author.userName}</p>;
    },
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => {
      const tags: Tags[] = row.getValue("tags");

      if (tags.length < 1) return <span>—</span>;

      return (
        <div className="flex gap-2 flex-wrap items-center">
          {tags.map((tag) => (
            <Badge key={tag.id}>{tag.name}</Badge>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "updateAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Modified
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("updateAt"));
      return (
        <time dateTime={date.toTimeString()} suppressHydrationWarning>
          {moment(date.getTime()).fromNow()}
        </time>
      );
    },
  },
  {
    id: "id",
    accessorKey: "id",
    header: "",
    cell: ({ row }) => {
      return <DeletePost row={row} />;
    },
  },
];

const DeletePost = ({ row }: { row: Row<TableData> }) => {
  const [state, action] = useFormState(deletePost, undefined);

  return (
    <form action={action}>
      <input
        id="postId"
        name="postId"
        value={row.getValue("id")}
        readOnly
        hidden
      />
      <DeleteButton />
    </form>
  );
};

const DeleteButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} variant="ghost" className="h-8 w-8 p-0">
      {pending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Trash className="h-4 w-4" />
      )}
    </Button>
  );
};
