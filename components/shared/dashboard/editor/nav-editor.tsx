import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Save, Settings, Upload } from "lucide-react";
import React from "react";

type NavEditor = {
  children: React.ReactNode;
  handleForm?: () => void;
};

export function NavEditor({ children, handleForm }: NavEditor) {
  return (
    <div className="sticky top-0 flex justify-between items-center py-4 z-50">
      {children}
      <ToggleGroup type="multiple" className="px-2 bg-secondary rounded-full">
        <ToggleGroupItem onClick={handleForm} value="setting">
          <Settings size={20} strokeWidth={1.5} absoluteStrokeWidth />
        </ToggleGroupItem>
        <ToggleGroupItem value="save">
          <Save size={20} strokeWidth={1.5} absoluteStrokeWidth />
        </ToggleGroupItem>
        <ToggleGroupItem value="upload">
          <Upload size={20} strokeWidth={1.5} absoluteStrokeWidth />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
