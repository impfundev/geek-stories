"use server";
import { revalidatePath } from "next/cache";
import fs from "fs";

export async function uploadMedia(formData: FormData) {
  const file: File = formData.get("file") as File;

  if (!file) {
    throw new Error("No file uploaded");
  }

  const uploadDir = process.cwd() + "/public/media/";
  const buffer = Buffer.from(await file.arrayBuffer());

  const featured = fs.writeFile(
    `${uploadDir}/${file.name}`,
    buffer,
    (error) => {
      console.error(error?.message);
    }
  );

  revalidatePath("/editor");
  console.log(featured);
  return;
}
