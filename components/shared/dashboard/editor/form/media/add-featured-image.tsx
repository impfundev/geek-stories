"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TrashIcon } from "lucide-react";
import { MediaData, Thumbnail } from "@/lib/type";
import { DialogMedia } from "./dialog-media";
import Image from "next/image";

export function AddFeatured({ media, thumbnail, onValueChange }: MediaData) {
  const [thumbnailState, setThumbnailState] = useState<Thumbnail | null>({
    ...thumbnail,
  });

  const handleRemoveFeatured = () => {
    setThumbnailState(null);
    onValueChange("thumbnail_url", null);
    onValueChange("thumbnail_width", null);
    onValueChange("thumbnail_height", null);
  };

  return (
    <>
      {thumbnailState?.url ? (
        <>
          <Image
            alt="Thumbnail Preview"
            className="w-full h-auto rounded-lg"
            width={480}
            height={360}
            src={thumbnailState?.url!}
          />
          <Button
            type="button"
            variant="outline"
            onClick={handleRemoveFeatured}
            className="gap-2 hover:bg-destructive hover:text-foreground"
          >
            <TrashIcon size={20} strokeWidth={1.5} /> Remove Featured Image
          </Button>
        </>
      ) : (
        <DialogMedia
          action={onValueChange}
          media={media}
          onThumbnailChange={setThumbnailState}
        />
      )}
    </>
  );
}
