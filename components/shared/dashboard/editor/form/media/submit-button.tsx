"use client";

import { Button } from "@/components/ui/Button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button size="sm" type="submit" className="gap-2" disabled={pending}>
      {pending && <Loader2 size={20} className="animate-spin" />} Upload
    </Button>
  );
}
