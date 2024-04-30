"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../models/prisma";
import { verifySession } from "../session";

export async function createPages() {
  const { userId } = await verifySession();
  const authorId = userId as string;

  const pagesData = await prisma.pages.create({
    data: {
      title: "New Pages",
      authorId,
      content:
        "<p>Start write your content here. Press '/' to browse text editor tool</p>",
      jsonContent: {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                text: "Start write your content here. Press '/' to browse text editor tool",
                type: "text",
              },
            ],
          },
        ],
      },
      published: "draft",
    },
  });

  revalidatePath("/dashboard/pages");
  console.log(pagesData);
  return;
}
