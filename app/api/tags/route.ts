import { prisma } from "@/lib/models/prisma";

export async function GET(req: Request) {
  const tags = await prisma.tags.findMany({
    include: {
      posts: true,
    },
  });

  if (!tags) {
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
      data: tags,
    },
    {
      status: 200,
    }
  );
}
