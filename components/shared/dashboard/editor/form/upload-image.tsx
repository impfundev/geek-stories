"use client";

import { Image, TrashIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { NodeViewWrapper } from "@tiptap/react";
import { Button } from "@/components/ui/button";

type File = {
  target: HTMLInputElement & EventTarget;
};
type UploadImage = {
  onChange?: (e: File) => void;
};

export function UploadImage() {
  const [selectedImage, setSelectedImage] = useState();
  const imageChange = (e: File) => {
    if (e.target.files && e.target.files.length > 0) {
      const file: any = e.target.files[0];
      setSelectedImage(file);
    }
  };

  return (
    <NodeViewWrapper>
      {selectedImage ? (
        <img
          className="w-[73vw] h-[400px] object-cover"
          src={URL.createObjectURL(selectedImage)}
          alt="Thumb"
        />
      ) : (
        <Card
          className={cn("flex items-center justify-center hover:bg-gray-300")}
        >
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-[800px] h-[400px] cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Image size={100} absoluteStrokeWidth />
              <p className="mb-2 text-sm">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs">WEBP, PNG, JPG or AVIF (MAX. 800x400px)</p>
            </div>
            <input
              onChange={imageChange}
              id="dropzone-file"
              type="file"
              className="hidden"
            />
          </label>
        </Card>
      )}
    </NodeViewWrapper>
  );
}
