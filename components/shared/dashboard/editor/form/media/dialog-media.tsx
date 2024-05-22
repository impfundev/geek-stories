import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Image as ImageIcon } from "lucide-react";
import { DialogMediaType } from "@/lib/type";
import { UploadMedia } from "./upload-media";
import { MediaView } from "../../../media/MediaView";

export function DialogMedia({
  media,
  action,
  onThumbnailChange,
}: DialogMediaType) {
  return (
    <Dialog>
      <DialogTrigger className="gap-4" asChild>
        <Button
          type="button"
          variant="outline"
          className="w-full gap-2 hover:bg-primary hover:text-background"
        >
          <ImageIcon size={20} strokeWidth={1.5} /> Add Media
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[80vw] max-h-[80vh] overflow-y-auto">
        <DialogHeader>Select Media</DialogHeader>
        <div className="p-6 grid gap-6 grid-cols-2 md:grid-cols-3">
          <UploadMedia />
          {media.map((media, i) => {
            return (
              <div className="flex flex-col" key={i}>
                <MediaView media={media} />
                <DialogClose asChild>
                  <Button
                    onClick={() => {
                      action("thumbnail_url", media.url);
                      action("thumbnail_width", String(media.metadata.width));
                      action("thumbnail_height", String(media.metadata.height));
                      onThumbnailChange({
                        url: media.url,
                        width: String(media.metadata.width),
                        height: String(media.metadata.height),
                      });
                    }}
                  >
                    Select
                  </Button>
                </DialogClose>
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
