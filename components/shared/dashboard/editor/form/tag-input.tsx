"use client";

import { createTag } from "@/lib/action";
import { Tags } from "@/lib/schema";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

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
import { Button } from "@/components/ui/button";

export function SelectTag({ tags }: { tags: Tags }) {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [tagsValue, setTagsValue] = useState<{ name: string }[]>([]);

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="tags">Tags:</label>
      <input
        id="tags"
        name="tags"
        value={JSON.stringify(tagsValue)}
        readOnly
        hidden
      />
      <div className="flex flex-wrap gap-2">
        {tagsValue.map((tag, i) => (
          <Badge key={`${i}-${tag.name}`}>{tag.name}</Badge>
        ))}
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            "Select tags..."
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput
              placeholder="Search tags..."
              onValueChange={setSearchValue}
            />
            <CommandEmpty className="flex flex-col items-center justify-center py-4">
              <span className="pb-2">No tags found.</span>
              <form action={createTag}>
                <input
                  id="create_tag_name"
                  name="create_tag_name"
                  value={searchValue}
                  readOnly
                  hidden
                />
                <Button type="submit" size={"sm"}>
                  Create {searchValue}
                </Button>
              </form>
            </CommandEmpty>
            <CommandGroup>
              {tags.map((tag) => (
                <CommandItem
                  key={tag.id}
                  value={tag.name}
                  onSelect={(value) => {
                    if (!tagsValue.find((tag) => tag.name === value)) {
                      setTagsValue([...tagsValue, { name: value }]);
                    } else {
                      setTagsValue([
                        ...tagsValue.filter((tag) => tag.name !== value),
                      ]);
                    }
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      tagsValue.includes({ name: tag.name })
                        ? "opacity-100"
                        : "opacity-0"
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
