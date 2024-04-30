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
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { TableData } from "@/lib/models/schema";
import { Table } from "@tanstack/react-table";
import { ChevronDown, Loader2, Plus } from "lucide-react";
import { createPages } from "@/lib/action";
import { useFormState, useFormStatus } from "react-dom";

const CreatePages = () => {
  const [state, action] = useFormState(createPages, undefined);
  return (
    <form action={action}>
      <ButtonCreatePages />
    </form>
  );
};

const ButtonCreatePages = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      variant="outline"
      className="ml-auto"
    >
      {pending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <>
          Create New Pages <Plus className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
};

export function TableNavigation({ table }: { table: Table<TableData> }) {
  let isAllRowsSelected = table.getIsAllRowsSelected();

  return (
    <div className="flex gap-4 items-center py-4">
      <Input
        placeholder="Search by title..."
        value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("title")?.setFilterValue(event.target.value)
        }
        className="w-full min-w-sm rounded-full"
      />
      <CreatePages />
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
