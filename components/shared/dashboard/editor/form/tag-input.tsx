"use client";

import { createTag } from "@/lib/action";
import { TagsTypes } from "@/lib/type";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
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
import { cn } from "@/lib/utils";

export function SelectTag({ tags }: TagsTypes) {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [addedTag, setAddedTag] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-4">
      <input
        readOnly
        name="tags"
        id="tags"
        className="hidden"
        value={addedTag}
      />
      <div className="flex flex-col gap-2">
        <span>Tags:</span>
        <div className="flex flex-wrap gap-2">
          {addedTag.map((tag, i) => {
            return <Badge key={i}>{tag}</Badge>;
          })}
        </div>
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="w-full" asChild>
          <Button
            type="button"
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            Select tag...
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput
              value={searchValue}
              onValueChange={setSearchValue}
              placeholder="Search tag..."
            />
            <CommandEmpty className="p-4 flex flex-col gap-4 items-center">
              <span className="text-sm">No tag found.</span>
              <form action={createTag}>
                <input
                  id="searchTagValue"
                  name="searchTagValue"
                  className="hidden"
                  value={searchValue}
                />
                <Button
                  onClick={() => {
                    addedTag.push(searchValue);
                    setOpen(false);
                  }}
                  size="sm"
                  type="submit"
                >
                  Create "{searchValue}" ?
                </Button>
              </form>
            </CommandEmpty>
            <CommandGroup className="max-h-36 overflow-y-auto">
              {tags.map((tag) => (
                <CommandItem
                  key={tag.id}
                  onSelect={() => {
                    if (!addedTag.includes(tag.name!)) {
                      addedTag.push(tag.name!);
                    } else {
                      const index = addedTag.indexOf(tag.name!);
                      addedTag.splice(index, 1);
                    }
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      addedTag.includes(tag.name!) ? "opacity-100" : "opacity-0"
                    )}
                  />
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
