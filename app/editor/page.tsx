import { Editor } from "@/components/shared/dashboard/editor";
import { getTag } from "@/lib/action";
import { cloudinary } from "@/lib/cloudinary /cloudinary";

export default async function EditorPage() {
  const { tags } = await getTag();
  const media = await cloudinary.v2.api.resources().then((result) => result);
  return <Editor tags={tags} media={media} />;
}
