"use server";
import { AllPost } from "../models/schema";
import { prisma } from "../models/prisma";

export async function getPosts() {
  const data = await prisma.posts.findMany({
    include: {
      tags: true,
      author: true,
    },
  });
  const posts = AllPost.parse(data);
  return { posts };
}
