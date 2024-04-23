"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../models/prisma";
import { z } from "zod";

export async function deletePost(state: any, formData: FormData) {
  const postIdSchema = z.string();
  const postId = formData.get("postId");
  const id = postIdSchema.parse(postId);
  const postData = await prisma.posts.delete({
    where: { id },
  });

  revalidatePath("/dashboard/posts");
  console.log(postData);
  return;
}
