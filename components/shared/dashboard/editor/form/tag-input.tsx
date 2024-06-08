"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createTag } from "@/lib/action";
import { Badge } from "@/components/ui/badge";

import { X, ChevronsUpDown, Loader2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import type { SelectTag } from "@/lib/type";
import type { Tags } from "@prisma/client";

export function SelectTag({ allTag, postTag, action }: SelectTag) {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [tagInput, setTagInput] = useState<Tags[]>(postTag);

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="tags">Tags:</label>
      <div className="flex flex-wrap gap-2">
        {tagInput.map((tag) => (
          <Badge key={tag.id} className="flex gap-2">
            <span>{tag.name}</span>
            <button
              onClick={() => {
                action(
                  "tags",
                  tagInput.filter((t) => t.id !== tag.id)
                );
                setTagInput(tagInput.filter((t) => t.id !== tag.id));
              }}
            >
              <X size={16} />
            </button>
          </Badge>
        ))}
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            Select tags...
            <ChevronsUpDown className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput
              placeholder="Search tags..."
              onValueChange={setSearchValue}
              maxLength={25}
            />
            <CommandEmpty className="flex flex-col items-center justify-center py-4">
              <span className="pb-2">No tags found.</span>
              <CreateTag value={searchValue} />
            </CommandEmpty>
            <CommandGroup className="grid gap-2">
              {allTag.map((tag) => (
                <CommandItem
                  key={tag.id}
                  value={tag.name!}
                  onSelect={(value) => {
                    if (!tagInput.find((tag) => tag.name === value)) {
                      action("tags", [
                        ...tagInput,
                        { id: tag.id, name: value },
                      ]);
                      setTagInput([...tagInput, { id: tag.id, name: value }]);
                    } else {
                      action(
                        "tags",
                        tagInput.filter((t) => t.id !== tag.id)
                      );
                      setTagInput(tagInput.filter((t) => t.id !== tag.id));
                    }
                    setOpen(false);
                  }}
                >
                  {tag.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

const CreateTag = ({ value }: { value: string }) => {
  const [state, action] = useFormState(createTag, undefined);

  return (
    <form action={action}>
      <input
        id="create_tag_name"
        name="create_tag_name"
        value={value}
        readOnly
        hidden
      />
      <ButtonCreateTag label={value} />
    </form>
  );
};

const ButtonCreateTag = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" size={"sm"}>
      {pending ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>Create {label}</>
      )}
    </Button>
  );
};
