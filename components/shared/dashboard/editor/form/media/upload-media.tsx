"use client";

import { FormEvent, useRef, useState } from "react";
import { upload } from "@vercel/blob/client";
import { Image as ImageIcon, Loader2 } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { uploadMedia } from "@/lib/action";

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
  const [loading, setLoading] = useState(false);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleMediaPreview = (e: FormEvent<HTMLInputElement>) => {
    const curFiles = e.currentTarget.files;

    for (const file of curFiles!) {
      if (validFileType(file)) {
        const url = URL.createObjectURL(file);
        const alt = file.name;
        const size = file.size;

        if (size >= 500000) setIsFileValid(false);

        setIsFileValid(true);
        setPreview({
          url,
          alt,
          size,
        });
      }
    }
  };

  const hadleUpload = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }

    const file = inputFileRef.current.files[0];

    const newBlob = await upload(file.name, file, {
      access: "public",
      handleUploadUrl: "/api/media/upload",
    });
    await uploadMedia(newBlob);

    setPreview(null);
    setLoading(false);
  };

  return (
    <form
      onSubmit={hadleUpload}
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
        Upload Media (Max 500KB)
      </Label>
      <Input
        className="hover:border-foreground hover:border-2 transition-all"
        id="file"
        name="file"
        type="file"
        ref={inputFileRef}
        accept="image/*"
        required
        onChange={handleMediaPreview}
      />
      <Button disabled={loading} type="submit">
        {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Upload"}
      </Button>
    </form>
  );
}
