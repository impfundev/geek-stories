"use server";
import { revalidatePath } from "next/cache";
import { PostSchema } from "../models/schema";
import { prisma } from "../models/prisma";
import { verifySession } from "../session";

export async function updatePost(formData: FormData) {
  const {
    id,
    title,
    content,
    excerpt,
    published,
    featured,
    thumbnail_url,
    thumbnail_alt,
    thumbnail_width,
    thumbnail_height,
    tags,
  } = PostSchema.parse({
    id: formData.get("postId"),
    title: formData.get("title"),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    published: formData.get("status"),
    featured: formData.get("featured"),
    thumbnail_url: formData.get("thumbnail-src"),
    thumbnail_alt: formData.get("thumbnail-alt"),
    thumbnail_height: formData.get("thumbnail-height"),
    thumbnail_width: formData.get("thumbnail-width"),
    tags: JSON.parse(formData.get("tags") as string),
  });

  const jsonContent = JSON.parse(formData.get("jsonContent") as string);
  const { userId } = await verifySession();
  const authorId = userId as string;

  const postData = await prisma.posts.update({
    where: { id },
    data: {
      title,
      authorId,
      excerpt,
      content,
      jsonContent,
      published,
      featured,
      thumbnail_url,
      thumbnail_alt,
      thumbnail_width,
      thumbnail_height,
      tags: {
        create: tags,
      },
    },
  });

  revalidatePath("/dashboard/posts");
  console.log(postData);
  return;
}
