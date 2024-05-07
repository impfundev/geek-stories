import { UploadMedia } from "@/components/shared/dashboard/editor/form/media/upload-media";
import { Media } from "@/lib/type";
import { MediaView } from "./MediaView";

export function ListMedia({ media }: { media: Media[] }) {
  return (
    <ul className="gap-6 columns-3">
      <UploadMedia />
      {media.map((media, i) => (
        <MediaView key={i} media={media} />
      ))}
    </ul>
  );
}
