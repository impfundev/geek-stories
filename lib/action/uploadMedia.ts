"use server";

import type { PutBlobResult } from "@vercel/blob";
import { imageDimensionsFromStream } from "image-dimensions";
import { prisma } from "../models/prisma";
import { revalidatePath } from "next/cache";

export async function uploadMedia(blob: PutBlobResult) {
  try {
    const { body } = await fetch(blob.url);
    const size = await imageDimensionsFromStream(body!);

    const storeToDatabase = await prisma.media.create({
      data: {
        url: blob.url,
        height: size?.height,
        width: size?.width,
      },
    });
    console.log(storeToDatabase);

    revalidatePath("/editor", "layout");
    revalidatePath("/dashboard/media");
    return;
  } catch (error) {
    throw new Error("Failed to store media to database");
  }
}
