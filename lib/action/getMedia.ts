"use server";

import { list } from "@vercel/blob";
import { Media } from "../type";

export async function getMedia() {
  const { blobs } = await list();

  const media: Media[] = blobs.map((m) => {
    return {
      url: m.url,
    };
  });
  return { media };
}
