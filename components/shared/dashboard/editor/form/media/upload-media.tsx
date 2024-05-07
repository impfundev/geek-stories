"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { uploadMedia } from "@/lib/action/uploadMedia";
import { Image as ImageIcon } from "lucide-react";
import { FormEvent, useState } from "react";
import { SubmitButton } from "@/components/shared/auth/SubmitButton";

type Preview = {
  url: string;
  alt: string;
  size: number;
};

const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

function validFileType(file: File) {
  return fileTypes.includes(file.type);
}

export function UploadMedia() {
  const [preview, setPreview] = useState<Preview | null>();
  const [isFileValid, setIsFileValid] = useState(false);

  const handleMediaPreview = (e: FormEvent<HTMLInputElement>) => {
    const curFiles = e.currentTarget.files;

    for (const file of curFiles!) {
      if (validFileType(file)) {
        const url = URL.createObjectURL(file);
        const alt = file.name;
        const size = file.size;

        setIsFileValid(true);
        setPreview({
          url,
          alt,
          size,
        });
      }
    }
  };

  return (
    <form
      action={uploadMedia}
      className="p-6 w-full max-w-sm flex flex-col gap-4 items-center justify-center my-2 rounded-lg border border-dashed border-foreground shadow-lg"
    >
      {preview && isFileValid ? (
        <img
          src={preview.url}
          alt={preview.alt}
          className="max-h-[300px] object-contain"
        />
      ) : (
        <ImageIcon size={100} absoluteStrokeWidth />
      )}

      <Label className="text-center" htmlFor="file">
        Upload Media
      </Label>
      <Input
        className="hover:border-foreground hover:border-2 transition-all"
        id="file"
        name="file"
        type="file"
        accept="image/*"
        required
        onChange={handleMediaPreview}
      />
      <SubmitButton onClick={() => setPreview(null)}>Upload</SubmitButton>
    </form>
  );
}
