import { isAuthorized } from "@/lib/auth";
import { prisma } from "@/lib/models/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.headers.get("authorization");
  const authorized = await isAuthorized(token);
  const searchParams = req.nextUrl.searchParams;

  const limitQuery = searchParams.get("limit");
  const limit = limitQuery ? Number(limitQuery) : undefined;
  const skipQuery = searchParams.get("skip");
  const skip = skipQuery ? Number(skipQuery) : undefined;

  if (!authorized)
    return Response.json(
      {
        message: "Unauthorized, invalid API key",
      },
      {
        status: 401,
      }
    );

  const posts = await prisma.posts.findMany({
    skip,
    take: limit,
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
