"use client";

import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

export function SubmitButton({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button className={className} disabled={pending} type="submit">
      {pending ? "Submitting..." : children || "Submit"}
    </Button>
  );
}
