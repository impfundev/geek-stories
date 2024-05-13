import moment from "moment";
import { ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import type { Payment_History, Subscription } from "@prisma/client";
import { Badge } from "@/components/ui/badge";

export type TablePayments = Payment_History;

export const columns: ColumnDef<TablePayments>[] = [
  {
    accessorKey: "subscription",
    header: "Title",
    cell: ({ row }) => {
      const plan: Subscription = row.getValue("subscription");
      return (
        <p className="text-xl font-semibold">
          Payment for plan <Badge>{plan.type}</Badge>
        </p>
      );
    },
  },
  {
    accessorKey: "subscription",
    header: "Ammount",
    cell: ({ row }) => {
      const plan: Subscription = row.getValue("subscription");
      return <p>Rp. {plan.price}</p>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      switch (row.getValue("status")) {
        case "settlement":
          return <Badge className="bg-lime-500">success</Badge>;
        case "deny":
          return (
            <Badge className="bg-yellow-500">{row.getValue("status")}</Badge>
          );
        case "error":
          return <Badge variant="destructive">{row.getValue("status")}</Badge>;
        default:
          return <Badge>{row.getValue("status")}</Badge>;
      }
    },
  },
  {
    accessorKey: "date",
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
      const date = new Date(row.getValue("date"));
      const now = new Date();
      return (
        <time
          className="flex gap-4 items-center"
          dateTime={date.toTimeString()}
          suppressHydrationWarning
        >
          {moment(date.getTime()).format("MMMM Do YYYY, H:mm a")}
        </time>
      );
    },
  },
];
