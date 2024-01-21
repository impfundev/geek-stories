import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ChevronLeftCircle, Save, Settings, Upload } from "lucide-react";

type NavEditor = {
  handleForm?: () => void;
  handleBack?: () => void;
};

export function NavEditor({ handleForm, handleBack }: NavEditor) {
  return (
    <div className="sticky top-0 flex justify-between items-center py-4 z-50">
      <Button onClick={handleBack} variant="secondary" className="gap-2">
        <ChevronLeftCircle size={20} absoluteStrokeWidth /> Back
      </Button>
      <ToggleGroup type="multiple" className="px-2 bg-secondary rounded-full">
        <ToggleGroupItem onClick={handleForm} value="setting">
          <Settings size={20} strokeWidth={1.5} absoluteStrokeWidth />
        </ToggleGroupItem>
        <ToggleGroupItem value="save">
          <Save size={20} strokeWidth={1.5} absoluteStrokeWidth />
        </ToggleGroupItem>
        <ToggleGroupItem value="upload">
          <Upload
            type="submit"
            size={20}
            strokeWidth={1.5}
            absoluteStrokeWidth
          />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
