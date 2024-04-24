import { Button } from "@/components/ui/button";
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

export function DialogMedia({ media, action }: DialogMediaType) {
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
          {media.map((m, i) => {
            return (
              <DialogClose asChild key={i}>
                <button
                  type="button"
                  className="max-w-sm max-h-72 rounded-lg overflow-hidden border hover:border-2 hover:border-foreground hover:shadow-sm hover:shadow-foreground transition-all"
                  onClick={() =>
                    action({
                      src: m.url,
                      alt: m.url,
                      width: m.metadata.width!.toString(),
                      height: m.metadata.height!.toString(),
                    })
                  }
                >
                  <img
                    className="max-w-full object-cover"
                    width={m.metadata.width}
                    height={m.metadata.height}
                    src={m.url}
                    alt={m.url}
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
