"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TrashIcon } from "lucide-react";
import { MediaData } from "@/lib/type";
import { DialogMedia } from "./dialog-media";
import { InputFeatured } from "./featured-image-input";

export function AddFeatured({ media }: MediaData) {
  const [featured, setFeatured] = useState({
    src: "",
    width: "",
    height: "",
    alt: "",
  });

  return (
    <>
      <InputFeatured value={featured} />
      {featured.src ? (
        <>
          <img
            className="w-full max-h-96 object-cover rounded-lg"
            src={featured.src}
            width={featured.width}
            height={featured.height}
            alt={featured.alt}
            loading="lazy"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              setFeatured({
                src: "",
                width: "",
                height: "",
                alt: "",
              })
            }
            className="gap-2 hover:bg-destructive hover:text-foreground"
          >
            <TrashIcon size={20} strokeWidth={1.5} /> Remove Featured Image
          </Button>
        </>
      ) : (
        <DialogMedia action={setFeatured} media={media} />
      )}
    </>
  );
}
