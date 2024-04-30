"use server";
import { AllPages } from "../models/schema";
import { prisma } from "../models/prisma";

export async function getPages() {
  const data = await prisma.pages.findMany({
    include: {
      author: true,
    },
  });
  const pages = AllPages.parse(data);
  return { pages };
}
