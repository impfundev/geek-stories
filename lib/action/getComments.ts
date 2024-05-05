"use server";
import { prisma } from "../models/prisma";

export async function getComments() {
  const comments = await prisma.comments.findMany({
    include: {
      user: true,
      post: true,
    },
  });

  return { comments };
}
