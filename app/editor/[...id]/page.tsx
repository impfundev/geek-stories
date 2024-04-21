import { Editor } from "@/components/shared/dashboard/editor";
import { getPosts, getTag } from "@/lib/action";
import { cloudinary } from "@/lib/cloudinary /cloudinary";
import { prisma } from "@/lib/models/prisma";

export default async function EditorPage({
  params,
}: {
  params: { id: string };
}) {
  const { tags } = await getTag();
  const media = await cloudinary.v2.api.resources().then((result) => result);
  const post = await prisma.posts.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!post) return <Editor tags={tags} media={media} />;

  return (
    <Editor
      id={post.id}
      tags={tags}
      media={media}
      initialContent={post.jsonContent}
    />
  );
}

export async function generateStaticParams() {
  const { posts } = await getPosts();

  return posts.map((post) => ({
    id: post.id,
  }));
}
