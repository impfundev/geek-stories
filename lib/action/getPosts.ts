"use server";
import { Posts } from "../models/schema";
import { prisma } from "../models/prisma";

export async function getPosts() {
  const data = await prisma.posts.findMany({
    include: {
      tags: true,
      author: true,
    },
  });
  const posts = Posts.parse(data);
  return { posts };
}
