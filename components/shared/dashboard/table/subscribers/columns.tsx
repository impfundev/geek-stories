import moment from "moment";
import { ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/Button";
import type { Subscription, User } from "@prisma/client";
import { Badge } from "@/components/ui/badge";

export type TableSubscribers = User & { subscription: Subscription | null };

export const columns: ColumnDef<TableSubscribers>[] = [
  {
    accessorKey: "user",
    header: "User",
    cell: async ({ row }) => {
      const user: User = row.getValue("user");
      const userFullName = user.firstName + " " + user.lastName;

      return (
        <p>{user.firstName && user.lastName ? userFullName : user.userName} </p>
      );
    },
  },
  {
    accessorKey: "subscription",
    header: "Plan",
    cell: ({ row }) => {
      const plan: Subscription = row.getValue("subscription");
      return (
          <Badge>{plan.type}</Badge>
      );
    },
  },
  {
    accessorKey: "user",
    header: "Status",
    cell: ({ row }) => {
      const user: User = row.getValue("user");
      const endDate = new Date(user.subscribeEndAt!)
      const dateNow = new Date()

      if (dateNow > endDate) return <Badge>Expired</Badge>

      return <Badge>Actived</Badge>
    },
  },
  {
    accessorKey: "user",
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
      const user: User = row.getValue("user");
      const startDate = new Date(user.subscribeStartAt!)
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
    accessorKey: "user",
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
      const user: User = row.getValue("user");
      const expiredAt = new Date(user.subscribeEndAt!)
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
