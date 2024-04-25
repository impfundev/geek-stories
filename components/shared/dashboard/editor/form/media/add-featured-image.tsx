"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TrashIcon } from "lucide-react";
import { MediaData } from "@/lib/type";
import { DialogMedia } from "./dialog-media";
import { InputFeatured } from "./featured-image-input";

export function AddFeatured({ media, thumbnail, onValueChange }: MediaData) {
  const [isHasThumbnail, setIsHasThumbnail] = useState(true);

  return (
    <>
      {thumbnail && isHasThumbnail ? (
        <>
          <img
            className="w-full max-h-96 object-cover rounded-lg"
            src={thumbnail.url!}
            width={thumbnail.width!}
            height={thumbnail.height!}
            loading="lazy"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsHasThumbnail(!isHasThumbnail)}
            className="gap-2 hover:bg-destructive hover:text-foreground"
          >
            <TrashIcon size={20} strokeWidth={1.5} /> Remove Featured Image
          </Button>
        </>
      ) : (
        <DialogMedia action={onValueChange} media={media} />
      )}
    </>
  );
}
