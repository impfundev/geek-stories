import { prisma } from "@/lib/models/prisma";

export async function GET(req: Request) {
  const pages = await prisma.pages.findMany({
    include: {
      author: true,
    },
  });

  if (!pages) {
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
      data: pages,
    },
    {
      status: 200,
    }
  );
}
