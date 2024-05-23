"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TrashIcon } from "lucide-react";
import { MediaData, Thumbnail } from "@/lib/type";
import { DialogMedia } from "./dialog-media";

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
          <img
            className="w-full h-auto rounded-lg"
            src={thumbnailState?.url!}
            width={thumbnailState?.width!}
            height={thumbnailState?.height!}
            loading="lazy"
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
