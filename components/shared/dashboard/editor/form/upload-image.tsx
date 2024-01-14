import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Image } from "lucide-react";

type File = {
  target: HTMLInputElement & EventTarget;
};
type UploadImage = {
  onChange?: (e: File) => void;
};

export function UploadImage({ onChange }: UploadImage) {
  return (
    <Card
      className={cn(
        "flex items-center justify-center w-full hover:bg-secondary"
      )}
    >
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 cursor-pointer"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Image size={100} absoluteStrokeWidth />
          <p className="mb-2 text-sm">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs">WEBP, PNG, JPG or AVIF (MAX. 800x400px)</p>
        </div>
        <input
          onChange={onChange}
          id="dropzone-file"
          type="file"
          className="hidden"
        />
      </label>
    </Card>
  );
}
