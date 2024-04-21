"use server";
import { revalidatePath } from "next/cache";
import { PostSchema } from "../models/schema/PostSchema";
import { prisma } from "../models/prisma";

export async function createPost(formData: FormData) {
  const {
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

  const postData = await prisma.posts.create({
    data: {
      title,
      authorId: "",
      excerpt,
      content,
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
