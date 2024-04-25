import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { uploadMedia } from "@/lib/action/uploadMedia";
import { Image as ImageIcon } from "lucide-react";
import { SubmitButton } from "./submit-button";

export function UploadMedia() {
  return (
    <form
      action={uploadMedia}
      className="p-6 w-full max-w-sm flex flex-col gap-4 items-center justify-center my-2 rounded-lg border"
    >
      <ImageIcon size={100} absoluteStrokeWidth />
      <Label className="text-center" htmlFor="file">
        Upload Image
      </Label>
      <Input
        className="hover:border-foreground hover:border-2 transition-all"
        id="file"
        name="file"
        type="file"
        required
      />
      <SubmitButton />
    </form>
  );
}