"use server";
import { Pages } from "../models/schema";
import { prisma } from "../models/prisma";

export async function getPages() {
  const data = await prisma.pages.findMany({
    include: {
      author: true,
    },
  });
  const pages = Pages.parse(data);
  return { pages };
}
