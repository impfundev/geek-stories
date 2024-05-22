import moment from "moment";
import { ArrowUpDown, Trash, Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef, Row } from "@tanstack/react-table";
import { Button } from "@/components/ui/Button";
import { useFormStatus } from "react-dom";
import type { User, Posts, Comments } from "@prisma/client";
import Link from "next/link";
import { deleteComments } from "@/lib/action";

export type TableComments = Comments;

export const columns: ColumnDef<TableComments>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => {
      const user: User = row.getValue("user");
      return <p>{user.userName}</p>;
    },
  },
  {
    accessorKey: "content",
    header: "Comment",
    cell: ({ row }) => <p>{row.getValue("content")}</p>,
  },
  {
    accessorKey: "post",
    header: "Post",
    cell: ({ row }) => {
      const post: Posts = row.getValue("post");
      return (
        <Link
          href={`/editor/posts/${row.getValue("id")}`}
          className="text-blue-600 font-bold text-lg"
        >
          {post.title}
        </Link>
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
          Date
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
      return <DeleteComment row={row} />;
    },
  },
];

const DeleteComment = ({ row }: { row: Row<TableComments> }) => {
  return (
    <form action={deleteComments}>
      <input
        id="commentId"
        name="commentId"
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
