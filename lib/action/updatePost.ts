"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../models/prisma";
import { redirect } from "next/navigation";
import type { Posts, Tags } from "@prisma/client";

export async function updatePost(data: Posts & { tags: Tags[] }) {
  const {
    id,
    authorId,
    title,
    createAt,
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
  } = data;

  const updateAt = new Date();

  const postData = await prisma.posts.update({
    where: { id },
    data: {
      title,
      createAt,
      updateAt,
      authorId,
      excerpt,
      content,
      jsonContent: jsonContent!,
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
