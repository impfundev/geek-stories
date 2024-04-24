"use server";
import { revalidatePath } from "next/cache";
import { PostSchema } from "../models/schema";
import { prisma } from "../models/prisma";
import { verifySession } from "../session";
import { redirect } from "next/navigation";

export async function updatePost(formData: FormData) {
  const { userId } = await verifySession();

  const {
    id,
    authorId,
    title,
    createAt,
    updateAt,
    tags,
    content,
    jsonContent,
    excerpt,
    published,
    featured,
    thumbnail_url,
    thumbnail_alt,
    thumbnail_width,
    thumbnail_height,
  } = PostSchema.parse({
    id: formData.get("postId"),
    title: formData.get("title"),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    jsonContent: JSON.parse(formData.get("jsonContent") as string),
    published: formData.get("published"),
    featured: formData.get("featured"),
    thumbnail_url: formData.get("thumbnail-src"),
    thumbnail_alt: formData.get("thumbnail-alt"),
    thumbnail_height: formData.get("thumbnail-height"),
    thumbnail_width: formData.get("thumbnail-width"),
    author: null,
    authorId: userId as string,
    createAt: JSON.parse(formData.get("createAt") as string),
    updateAt: JSON.parse(formData.get("updateAt") as string),
    tags: JSON.parse(formData.get("tags") as string),
  });

  const postData = await prisma.posts.update({
    where: { id },
    data: {
      title,
      createAt,
      updateAt,
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
        set: tags,
      },
    },
  });

  revalidatePath("/dashboard/posts");
  console.log(postData);
  redirect("/dashboard/posts");
}
