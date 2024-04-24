"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../models/prisma";
import { verifySession } from "../session";

export async function createPost() {
  const { userId } = await verifySession();
  const authorId = userId as string;

  const postData = await prisma.posts.create({
    data: {
      title: "New Post",
      authorId,
      excerpt: "Write the description of your post here.",
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
      featured: false,
    },
  });

  revalidatePath("/dashboard/posts");
  console.log(postData);
  return;
}
