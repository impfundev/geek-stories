"use client";

import type { NavEditor, UpdateButton } from "@/lib/type";

import { ChevronLeftCircle, Loader2, PanelRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NavEditor({
  handleForm,
  handleBack,
  onStatusChange,
  isLoading,
}: NavEditor) {
  return (
    <div className="sticky inset-x-0 w-full md:px-16 flex justify-between items-center py-4 z-50">
      <Button type="button" onClick={handleBack} className="gap-2" size={"sm"}>
        <ChevronLeftCircle size={20} absoluteStrokeWidth /> Back
      </Button>
      <div className="flex gap-1 items-center rounded-full bg-background border">
        {isLoading ? (
          <Loader2
            className="animate-spin ml-2"
            size={20}
            absoluteStrokeWidth
          />
        ) : (
          <>
            <SaveButton action={onStatusChange} />
            <UploadButton action={onStatusChange} />
          </>
        )}
        <Button
          className="rounded-full gap-2"
          value="setting"
          type="button"
          onClick={handleForm}
        >
          <span className="hidden md:block">Settings*</span>
          <PanelRight size={20} strokeWidth={1.5} absoluteStrokeWidth />
        </Button>
      </div>
    </div>
  );
}

const SaveButton = ({ action }: UpdateButton) => {
  return (
    <Button
      size={"sm"}
      value="draft"
      variant="ghost"
      type="submit"
      onClick={() => action("published", "draft")}
    >
      Save draft
    </Button>
  );
};

const UploadButton = ({ action }: UpdateButton) => {
  return (
    <Button
      size={"sm"}
      value="upload"
      variant="ghost"
      type="submit"
      onClick={() => action("published", "upload")}
    >
      Publish
    </Button>
  );
};
