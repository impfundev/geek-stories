"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../models/prisma";
import { z } from "zod";

export async function deletePages(state: any, formData: FormData) {
  const pagesIdSchema = z.string();
  const pagesId = formData.get("pagesId");
  const id = pagesIdSchema.parse(pagesId);
  const postData = await prisma.pages.delete({
    where: { id },
  });

  revalidatePath("/dashboard/pages");
  console.log(postData);
  return;
}
