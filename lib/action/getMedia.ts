"use server";

import { promises as fs } from "fs";
import sizeOf from "image-size";

export async function getMedia() {
  const baseUrl = process.env.baseUrl!;
  const dir = process.cwd() + "/public/media/";
  const readDir = await fs.readdir(dir);

  const media = readDir.map((m) => {
    return {
      url: baseUrl + "/media/" + m,
      metadata: sizeOf(dir + m),
    };
  });

  return { media };
}
