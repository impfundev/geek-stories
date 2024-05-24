"use server";
import { revalidatePath } from "next/cache";
import { del } from "@vercel/blob";
import { prisma } from "../models/prisma";

export async function deleteMedia(formData: FormData) {
  const mediaUrl = formData.get("mediaUrl") as string;

  const deleteBlob = await del(mediaUrl);
  const getMediaIdFormDb = await prisma.media.findFirst({
    where: { url: mediaUrl },
  });

  if (!getMediaIdFormDb) throw new Error("Media Not Found on the database");

  const deleteMediaFromDb = await prisma.media.delete({
    where: { id: getMediaIdFormDb.id },
  });

  revalidatePath("/editor", "layout");
  revalidatePath("/dashboard/media");
  console.log(deleteBlob, deleteMediaFromDb);
  return;
}
