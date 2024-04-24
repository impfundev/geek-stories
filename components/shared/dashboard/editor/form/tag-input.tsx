"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createTag } from "@/lib/action";
import type { Tags } from "@prisma/client";
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

export function SelectTag({ allTag, postTag, register }: SelectTag) {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [tagsValue, setTagsValue] = useState<Tags[]>(postTag);

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="tags">Tags:</label>
      <input
        {...register("tags")}
        value={JSON.stringify(tagsValue)}
        readOnly
        hidden
      />
      <div className="flex flex-wrap gap-2">
        {tagsValue.map((tag) => (
          <Badge
            key={tag.id}
            className="flex gap-2"
            onClick={() =>
              setTagsValue([...tagsValue.filter((t) => t.name !== tag.name)])
            }
          >
            <span>{tag.name}</span>
            <X size={16} />
          </Badge>
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
            Select tags...
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
              <CreateTag value={searchValue} />
            </CommandEmpty>
            <CommandGroup className="grid gap-2">
              {allTag.map((tag) => (
                <CommandItem
                  key={tag.id}
                  value={tag.name!}
                  onSelect={(value) => {
                    if (!tagsValue.find((tag) => tag.name === value)) {
                      setTagsValue([...tagsValue, { id: tag.id, name: value }]);
                    } else {
                      setTagsValue([
                        ...tagsValue.filter((tag) => tag.name !== value),
                      ]);
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
