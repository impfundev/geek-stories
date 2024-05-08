"use server";
import { prisma } from "../models/prisma";
import { verifySession } from "../session";
import { revalidatePath } from "next/cache";

export async function quickDraft(state: any, formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const { userId } = await verifySession();
  const authorId = userId as string;

  const quickDraftData = await prisma.posts.create({
    data: {
      title,
      authorId,
      excerpt: "Write the description of your post here.",
      content: `<p>${content}</p>`,
      jsonContent: {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                text: content,
                type: "text",
              },
            ],
          },
        ],
      },
      published: "draft",
      featured: false,
    },
  });

  console.log(quickDraftData);
  revalidatePath("/dashboard");
  return {
    message: "Success saved to draft",
  };
}
