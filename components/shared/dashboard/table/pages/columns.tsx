import { ArrowUpDown, Trash, Loader2 } from "lucide-react";
import { TableData } from "@/lib/models/schema";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef, Row } from "@tanstack/react-table";
import { Button } from "@/components/ui/Button";
import { deletePages } from "@/lib/action/deletePages";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import moment from "moment";

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
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <Link
        href={`/editor/pages/${row.getValue("id")}`}
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
      return <DeletePages row={row} />;
    },
  },
];

const DeletePages = ({ row }: { row: Row<TableData> }) => {
  const [state, action] = useFormState(deletePages, undefined);

  return (
    <form action={action}>
      <input
        id="pagesId"
        name="pagesId"
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
