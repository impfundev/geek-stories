import moment from "moment";
import { ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import type { Subscription, User } from "@prisma/client";
import { Badge } from "@/components/ui/badge";

export type TableSubscribers = User & { subscription: Subscription | null };

export const columns: ColumnDef<TableSubscribers>[] = [
  {
    accessorKey: "userName",
    header: "User",
    cell: ({ row }) => {
      const userName = row.getValue("userName") as string;

      return <p>{userName}</p>;
    },
  },
  {
    accessorKey: "subscription",
    header: "Plan",
    cell: ({ row }) => {
      const plan: Subscription = row.getValue("subscription");
      return <Badge>{plan.type}</Badge>;
    },
  },
  {
    accessorKey: "subscribeEndAt",
    header: "Status",
    cell: ({ row }) => {
      const subscribeEndAt = row.getValue("subscribeEndAt") as Date;
      const endDate = new Date(subscribeEndAt);
      const dateNow = new Date();

      if (dateNow > endDate) return <Badge>Expired</Badge>;

      return <Badge>Actived</Badge>;
    },
  },
  {
    accessorKey: "subscribeStartAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Subscribed Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const subscribeStartAt = row.getValue("subscribeStartAt") as Date;
      const startDate = new Date(subscribeStartAt);
      return (
        <time
          className="flex gap-4 items-center"
          dateTime={startDate.toTimeString()}
          suppressHydrationWarning
        >
          {moment(startDate.getTime()).format("MMMM Do YYYY, H:mm a")}
        </time>
      );
    },
  },
  {
    accessorKey: "subscribeEndAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Expired At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const subscribeEndAt = row.getValue("subscribeEndAt") as Date;
      const expiredAt = new Date(subscribeEndAt);
      return (
        <time
          className="flex gap-4 items-center"
          dateTime={expiredAt.toTimeString()}
          suppressHydrationWarning
        >
          {moment(expiredAt.getTime()).format("MMMM Do YYYY, H:mm a")}
        </time>
      );
    },
  },
];
