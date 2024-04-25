"use server";
import { prisma } from "../models/prisma";

export async function getTag() {
  const tags = await prisma.tags.findMany({
    include: {
      posts: true,
    },
  });
  return { tags };
}
