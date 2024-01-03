import { Button } from "@/components/ui/button";
import { Save, Upload } from "lucide-react";

export default function EditorLayout() {
  return (
    <div className="flex justify-end items-center">
      <div className="flex items-center gap-4">
        <Button variant="outline">
          <Save size={20} strokeWidth={1} absoluteStrokeWidth />
        </Button>
        <Button>
          <Upload size={20} strokeWidth={1} absoluteStrokeWidth />
        </Button>
      </div>
    </div>
  );
}
