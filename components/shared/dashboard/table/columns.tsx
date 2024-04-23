import { ArrowUpDown, Trash, Loader2 } from "lucide-react";
import { TableData } from "@/lib/models/schema";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef, Row } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { deletePost } from "@/lib/action/deletePost";
import { useFormState, useFormStatus } from "react-dom";

export const columns: ColumnDef<TableData>[] = [
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
    accessorKey: "published",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("published")}</div>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "createAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Create At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("createAt"));
      return (
        <time dateTime={date.toTimeString()} suppressHydrationWarning>
          {date.toDateString()}
        </time>
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
          Update At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("updateAt"));
      return (
        <time dateTime={date.toTimeString()} suppressHydrationWarning>
          {date.toDateString()}
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
