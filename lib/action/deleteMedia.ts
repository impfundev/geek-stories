"use server";
import { revalidatePath } from "next/cache";
import fs from "fs";

export async function deleteMedia(formData: FormData) {
  const mediaPath = formData.get("mediaPath") as string;

  const deleteFile = fs.unlink(mediaPath, (error) => {
    console.error(error?.message);
  });

  revalidatePath("/dashboard", "layout");
  console.log(deleteFile);
  return;
}
