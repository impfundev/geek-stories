"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../models/prisma";

export async function deleteTag(state: any, formData: FormData) {
  const id = formData.get("tagId") as string;
  try {
    const tag = await prisma.tags.delete({
      where: {
        id,
      },
    });

    console.log(tag);
    revalidatePath("/dashboard/tags");
    return;
  } catch (error) {
    console.error(error);
    return;
  }
}
