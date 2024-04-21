"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../models/prisma";

export async function createTag(formData: FormData) {
  const name = formData.get("create_tag_name") as string;
  try {
    const tag = await prisma.tags.create({
      data: {
        name,
      },
    });
    revalidatePath("/editor");
    return tag;
  } catch (error) {
    console.error(error);
    return;
  }
}
