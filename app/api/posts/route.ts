import { prisma } from "@/lib/models/prisma";

export async function GET(req: Request) {
  const posts = await prisma.posts.findMany({
    include: {
      author: true,
      tags: true,
      comments: true,
    },
  });

  if (!posts) {
    return Response.json(
      {
        message: "Failed to get posts",
      },
      {
        status: 500,
      }
    );
  }

  return Response.json(
    {
      data: posts,
    },
    {
      status: 200,
    }
  );
}
