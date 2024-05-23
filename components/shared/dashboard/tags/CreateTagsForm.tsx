"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createTag } from "@/lib/action";

function ButtonCreateTag() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} size="sm" type="submit">
      {pending ? <Loader2 className="w-6 h-6 animate-spin" /> : "Submit"}
    </Button>
  );
}

export function CreateTagForm() {
  const [state, action] = useFormState(createTag, undefined);

  return (
    <form action={action} className="p-6 flex flex-col gap-4">
      <h2>Create Tag</h2>
      <fieldset>
        <Label htmlFor="tagName">Name:</Label>
        <Input
          id="tagName"
          name="create_tag_name"
          placeholder="Enter tag name"
          required
        />
      </fieldset>
      <ButtonCreateTag />
    </form>
  );
}
