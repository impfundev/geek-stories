"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../models/prisma";
import { redirect } from "next/navigation";
import type { Pages } from "@prisma/client";

export async function updatePages(data: Pages) {
  const { id, authorId, title, createAt, content, jsonContent, published } =
    data;

  const updateAt = new Date();

  const pagesData = await prisma.pages.update({
    where: { id },
    data: {
      title,
      createAt,
      updateAt,
      authorId,
      content,
      jsonContent: jsonContent!,
      published,
    },
  });

  revalidatePath(`/editor/posts/${pagesData.id}`);
  revalidatePath("/dashboard/pages");

  console.log(pagesData);
  redirect("/dashboard/pages");
}
