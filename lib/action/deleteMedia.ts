"use server";
import { revalidatePath } from "next/cache";
import { del } from "@vercel/blob";

export async function deleteMedia(formData: FormData) {
  const mediaUrl = formData.get("mediaUrl") as string;

  const deleteBlob = await del(mediaUrl);

  console.log(deleteBlob);
  revalidatePath("/editor", "layout");
  revalidatePath("/dashboard/media");
  return;
}
