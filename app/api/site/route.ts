import { prisma } from "@/lib/models/prisma";

export async function GET(req: Request) {
  const siteInfo = await prisma.site_Info.findMany({
    include: {
      user: true,
    },
  });

  if (!siteInfo) {
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
      data: siteInfo,
    },
    {
      status: 200,
    }
  );
}
