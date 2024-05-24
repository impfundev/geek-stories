"use server";

import { prisma } from "../models/prisma";
import { Media } from "../type";

export async function getMedia() {
  const getMedia = await prisma.media.findMany();

  const media: Media[] = getMedia.map((m) => {
    return {
      url: m.url,
      width: m.width,
      height: m.height,
    };
  });

  return { media };
}
