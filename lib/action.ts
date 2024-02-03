"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./models";

export async function createPost(formData: FormData) {
  const posts = {
    title: formData.get("title"),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    featured: formData.get("featured"),
    status: formData.get("status"),
  };

  console.log(posts);
  return;
}

export async function createTag(formData: FormData) {
  const name = formData.get("searchTagValue")?.toString();
  const tag = await prisma.tags.create({
    data: {
      name,
    },
  });
  console.log(tag);
  revalidatePath("/editor");
  return tag;
}
