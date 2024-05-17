import { isAuthorized } from "@/lib/auth";
import { prisma } from "@/lib/models/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.headers.get("authorization");
  const authorized = await isAuthorized(token);
  const searchParams = req.nextUrl.searchParams;

  const searchQuery = searchParams.get("q");
  const query = searchQuery ? searchQuery : undefined;

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
    include: {
      author: true,
      tags: true,
      comments: true,
    },
  });

  if (!posts)
    return Response.json(
      {
        message: "Failed to get posts, try again later.",
      },
      {
        status: 500,
      }
    );

  if (!query)
    return Response.json(
      {
        message: "Search keyword is not defined",
      },
      {
        status: 404,
      }
    );

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().match(query.toLowerCase()) ||
      post.excerpt?.toLowerCase().match(query.toLowerCase()) ||
      post.content?.toLowerCase().match(query.toLowerCase())
  );

  if (filteredPosts.length === 0)
    return Response.json(
      {
        message: `Posts with keyword '${query}' is not found`,
      },
      {
        status: 404,
      }
    );

  return Response.json(
    {
      data: filteredPosts,
    },
    {
      status: 200,
    }
  );
}
