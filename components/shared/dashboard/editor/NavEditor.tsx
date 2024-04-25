"use client";

import type { NavEditor, UpdateButton } from "@/lib/type";

import {
  ChevronLeftCircle,
  Loader2,
  Save,
  PanelRight,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function NavEditor({
  handleForm,
  handleBack,
  onStatusChange,
  isLoading,
}: NavEditor) {
  return (
    <div className="sticky top-0 flex justify-between items-center py-4 z-50">
      <Button type="button" onClick={handleBack} className="gap-2">
        <ChevronLeftCircle size={20} absoluteStrokeWidth /> Back
      </Button>
      <div className="flex gap-1 items-center px-2 rounded-full bg-background border">
        <SaveButton action={onStatusChange} pending={isLoading} />
        <UploadButton action={onStatusChange} pending={isLoading} />
        <Button
          value="setting"
          variant="ghost"
          type="button"
          size="icon"
          onClick={handleForm}
        >
          <PanelRight size={20} strokeWidth={1.5} absoluteStrokeWidth />
        </Button>
      </div>
    </div>
  );
}

const SaveButton = ({ action, pending }: UpdateButton) => {
  return (
    <Button
      value="draft"
      variant="ghost"
      type="submit"
      size="icon"
      disabled={pending}
      onClick={() => action("published", "draft")}
    >
      {pending ? (
        <Loader2 size={20} strokeWidth={1.5} absoluteStrokeWidth />
      ) : (
        "Save draft"
      )}
    </Button>
  );
};

const UploadButton = ({ action, pending }: UpdateButton) => {
  return (
    <Button
      value="upload"
      variant="ghost"
      type="submit"
      size="icon"
      disabled={pending}
      onClick={() => action("published", "upload")}
    >
      <input name="published" id="published" hidden value="upload" readOnly />
      {pending ? (
        <Loader2 size={20} strokeWidth={1.5} absoluteStrokeWidth />
      ) : (
        "Publish"
      )}
    </Button>
  );
};
