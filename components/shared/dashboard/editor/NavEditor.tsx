import { useFormStatus } from "react-dom";
import type { NavEditor } from "@/lib/type";

import { ChevronLeftCircle, Save, Settings, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NavEditor({ handleForm, handleBack, setStatus }: NavEditor) {
  const { pending } = useFormStatus();

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
        {pending ? (
          <p>Submitting...</p>
        ) : (
          <>
            <Button
              value="draft"
              variant="ghost"
              type="submit"
              size="icon"
              onClick={() => setStatus("draft")}
              disabled={pending}
            >
              <Save size={20} strokeWidth={1.5} absoluteStrokeWidth />
            </Button>
            <Button
              value="upload"
              variant="ghost"
              type="submit"
              size="icon"
              onClick={() => setStatus("upload")}
              disabled={pending}
            >
              <Upload size={20} strokeWidth={1.5} absoluteStrokeWidth />
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
