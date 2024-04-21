import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Image as ImageIcon } from "lucide-react";
import { Media, DialogMediaType } from "@/lib/type";
import { UploadImage } from "./upload-image";
import Image from "next/image";

export function DialogMedia({ media, action }: DialogMediaType) {
  return (
    <Dialog>
      <DialogTrigger className="gap-4" asChild>
        <Button
          type="button"
          variant="outline"
          className="w-full gap-2 hover:bg-primary hover:text-background"
        >
          <ImageIcon size={20} strokeWidth={1.5} /> Add Image
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[80vw] max-h-[80vh] overflow-y-auto">
        <DialogHeader>Select Image</DialogHeader>
        <div className="p-6 grid gap-6 grid-cols-2 md:grid-cols-3">
          <UploadImage />
          {media?.resources.map((media: Media) => {
            return (
              <DialogClose asChild key={media.asset_id}>
                <button
                  type="button"
                  className="max-w-sm max-h-72 rounded-lg overflow-hidden border hover:border-2 hover:border-foreground hover:shadow-sm hover:shadow-foreground transition-all"
                  onClick={() =>
                    action({
                      src: media.secure_url,
                      alt: media.public_id,
                      width: media.width.toString(),
                      height: media.height.toString(),
                    })
                  }
                >
                  <Image
                    className="max-w-full object-cover"
                    width={media.width}
                    height={media.height}
                    src={media.secure_url}
                    alt={media.public_id}
                    sizes="(max-width: 240px) 100vw, 33vw"
                    loading="lazy"
                  />
                </button>
              </DialogClose>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
