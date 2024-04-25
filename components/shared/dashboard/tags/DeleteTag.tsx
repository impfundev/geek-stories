"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Badge } from "@/components/ui/badge";
import { deleteTag } from "@/lib/action/deleteTag";
import { Loader2 } from "lucide-react";

export function DeleteTag({ tagId }: { tagId: string }) {
  const [state, action] = useFormState(deleteTag, undefined);

  return (
    <form action={action}>
      <input id="tagId" name="tagId" value={tagId} readOnly hidden />
      <DeleteTagButton />
    </form>
  );
}

function DeleteTagButton() {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending}>
      <Badge>
        {pending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Delete"}
      </Badge>
    </button>
  );
}
