import { Editor } from "@/components/shared/dashboard/editor";
import { getPosts, getTag, getMedia } from "@/lib/action";
import { prisma } from "@/lib/models/prisma";
import { redirect } from "next/navigation";

export default async function EditorPage({
  params,
}: {
  params: { id: string };
}) {
  const { media } = await getMedia();
  const { tags } = await getTag();
  const post = await prisma.posts.findUnique({
    where: {
      id: params.id,
    },
    include: {
      tags: true,
    },
  });

  if (!post) redirect("/dashboard");

  return <Editor allTag={tags} media={media!} post={post} />;
}

export async function generateStaticParams() {
  const { posts } = await getPosts();

  return posts.map((post) => ({
    id: post.id,
  }));
}
