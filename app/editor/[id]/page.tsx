import { Editor } from "@/components/shared/dashboard/editor";
import { getPosts, getTag } from "@/lib/action";
import { cloudinary } from "@/lib/cloudinary /cloudinary";
import { prisma } from "@/lib/models/prisma";
import { redirect } from "next/navigation";

export default async function EditorPage({
  params,
}: {
  params: { id: string };
}) {
  const media = await cloudinary.v2.api.resources().then((result) => result);
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

  return <Editor allTag={tags} postTag={post.tags} media={media} post={post} />;
}

export async function generateStaticParams() {
  const { posts } = await getPosts();

  return posts.map((post) => ({
    id: post.id,
  }));
}
