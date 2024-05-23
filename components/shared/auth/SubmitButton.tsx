"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export const SubmitButton = ({ className, variant, ...props }: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button className={className} disabled={pending} type="submit" {...props}>
      {pending ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        props.children || "Submit"
      )}
    </Button>
  );
};
