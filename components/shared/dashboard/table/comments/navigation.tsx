import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import { TableComments } from "./columns";

export function TableNavigation({ table }: { table: Table<TableComments> }) {
  let isAllRowsSelected = table.getIsAllRowsSelected();

  return (
    <div className="flex gap-4 items-center py-4">
      <Input
        placeholder="Search by user..."
        value={(table.getColumn("user")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("user")?.setFilterValue(event.target.value)
        }
        className="w-full min-w-sm rounded-full"
      />
      <Button onClick={table.getToggleAllRowsSelectedHandler()}>
        {isAllRowsSelected ? "Deselect All" : "Select All"}
      </Button>
      {isAllRowsSelected && (
        <AlertDialog>
          <Button asChild>
            <AlertDialogTrigger>Delete All</AlertDialogTrigger>
          </Button>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you absolutely sure to delete all data in this section?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete all
                data in this table and remove from servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto">
            Fields <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
