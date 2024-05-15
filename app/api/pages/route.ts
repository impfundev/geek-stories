import { isAuthorized } from "@/lib/auth";
import { prisma } from "@/lib/models/prisma";

export async function GET(req: Request) {
  const token = req.headers.get("authorization");
  const authorized = await isAuthorized(token);

  if (!authorized)
    return Response.json(
      {
        message: "Unauthorized, invalid API key",
      },
      {
        status: 401,
      }
    );

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
