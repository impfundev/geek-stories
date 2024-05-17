import { isAuthorized } from "@/lib/auth";
import { prisma } from "@/lib/models/prisma";
import { NextApiRequest } from "next";
import { headers } from "next/headers";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const token = headers().get("authorization");
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

  const posts = await prisma.posts.findUnique({
    where: { id: Number(id) },
    include: {
      author: true,
      tags: true,
      comments: true,
    },
  });

  if (!posts)
    return Response.json(
      {
        message: `Post with id: ${id} not found`,
      },
      {
        status: 404,
      }
    );

  return Response.json(
    {
      data: posts,
    },
    {
      status: 200,
    }
  );
}
