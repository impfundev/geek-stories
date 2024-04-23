"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import type { NavEditor } from "@/lib/type";

import {
  ChevronLeftCircle,
  Loader2,
  Save,
  Settings,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonProps } from "@/components/ui/Button";

export function NavEditor({
  handleForm,
  handleBack,
  onStatusChange,
}: NavEditor) {
  return (
    <div className="sticky top-0 flex justify-between items-center py-4 z-50">
      <Button type="button" onClick={handleBack} className="gap-2">
        <ChevronLeftCircle size={20} absoluteStrokeWidth /> Back
      </Button>
      <div className="flex gap-1 items-center px-2 rounded-full bg-background border">
        <Button
          value="setting"
          variant="ghost"
          type="button"
          size="icon"
          onClick={handleForm}
        >
          <Settings size={20} strokeWidth={1.5} absoluteStrokeWidth />
        </Button>
        <SaveButton onClick={() => onStatusChange("upload")} />
        <UploadButton onClick={() => onStatusChange("upload")} />
      </div>
    </div>
  );
}

const SaveButton = (props: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      value="draft"
      variant="ghost"
      type="submit"
      size="icon"
      disabled={pending}
      onClick={props.onClick}
    >
      {pending ? (
        <Loader2 size={20} strokeWidth={1.5} absoluteStrokeWidth />
      ) : (
        <Save size={20} strokeWidth={1.5} absoluteStrokeWidth />
      )}
    </Button>
  );
};

const UploadButton = (props: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      value="upload"
      variant="ghost"
      type="submit"
      size="icon"
      disabled={pending}
      onClick={props.onClick}
    >
      <input name="published" id="published" hidden value="upload" readOnly />
      {pending ? (
        <Loader2 size={20} strokeWidth={1.5} absoluteStrokeWidth />
      ) : (
        <Upload size={20} strokeWidth={1.5} absoluteStrokeWidth />
      )}
    </Button>
  );
};
