import { redirect } from "next/navigation";

import { EditorPosts } from "@/components/shared/dashboard/editor/EditorPosts";

import { getPosts, getTag, getMedia } from "@/lib/action";
import { prisma } from "@/lib/models/prisma";

export default async function EditorPostsPage({
  params,
}: {
  params: { id: string };
}) {
  const { media } = await getMedia();
  const { tags } = await getTag();
  const post = await prisma.posts.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      tags: true,
    },
  });

  if (!post) redirect("/dashboard");

  return <EditorPosts allTag={tags} media={media!} post={post} />;
}

export async function generateStaticParams() {
  const { posts } = await getPosts();

  return posts.map((post) => ({
    id: String(post.id),
  }));
}
