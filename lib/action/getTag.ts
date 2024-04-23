"use server";
import { TagsSchema } from "../models/schema/TagsSchema";
import { prisma } from "../models/prisma";

export async function getTag() {
  const tags = await prisma.tags.findMany();
  return { tags };
}
