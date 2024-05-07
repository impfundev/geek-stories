import { ListMedia } from "@/components/shared/dashboard/media/ListMedia";
import { getMedia } from "@/lib/action";

export default async function Media() {
  const { media } = await getMedia();
  return (
    <>
      <h1>Media</h1>
      <div className="py-6 flex flex-col gap-6">
        <ListMedia media={media} />
      </div>
    </>
  );
}
