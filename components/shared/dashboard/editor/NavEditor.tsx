import { Button } from "@/components/ui/button";
import { ChevronLeftCircle, Save, Settings, Upload } from "lucide-react";
import type { NavEditor } from "@/lib/type";

export function NavEditor({ handleForm, handleBack, setStatus }: NavEditor) {
  return (
    <div className="sticky top-0 flex justify-between items-center py-4 z-50">
      <Button type="button" onClick={handleBack} className="gap-2">
        <ChevronLeftCircle size={20} absoluteStrokeWidth /> Back
      </Button>
      <div className="flex gap-1 items-center px-2 rounded-full bg-background border">
        <Button
          variant="ghost"
          type="button"
          size="icon"
          onClick={handleForm}
          value="setting"
        >
          <Settings size={20} strokeWidth={1.5} absoluteStrokeWidth />
        </Button>
        <Button
          variant="ghost"
          type="submit"
          size="icon"
          onClick={() => setStatus("save")}
          value="save"
        >
          <Save size={20} strokeWidth={1.5} absoluteStrokeWidth />
        </Button>
        <Button
          variant="ghost"
          type="submit"
          size="icon"
          onClick={() => setStatus("upload")}
          value="upload"
        >
          <Upload size={20} strokeWidth={1.5} absoluteStrokeWidth />
        </Button>
      </div>
    </div>
  );
}
