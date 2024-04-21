"use server";
import { revalidatePath } from "next/cache";
import axios from "axios";

export async function uploadImage(formData: FormData) {
  const file: File = formData.get("file") as File;
  if (!file) {
    throw new Error("No file uploaded");
  }
  formData.append("upload_preset", "CsHR42qLL5hn9Ik23");

  const featured = await axios.post(
    "https://api.cloudinary.com/v1_1/dlf8ittab/image/upload",
    formData
  );
  revalidatePath("/editor");
  console.log(featured);
  return;
}
