"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../models/prisma";

export async function deleteComments(formData: FormData) {
  const id = formData.get("commentId") as string;
  const comments = await prisma.comments.delete({
    where: {
      id: Number(id),
    },
  });

  revalidatePath("/dashboard/comments");
  return { comments };
}
