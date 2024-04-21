"use server";
import { TagsSchema } from "../models/schema/TagsSchema";
import { prisma } from "../models/prisma";

export async function getTag() {
  const data = await prisma.tags.findMany();
  const tags = TagsSchema.parse(data);
  return { tags };
}
