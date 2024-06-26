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

  const comments = await prisma.comments.findMany({
    include: {
      user: true,
      post: true,
    },
  });

  if (!comments) {
    return Response.json(
      {
        message: "Failed to get comment",
      },
      {
        status: 500,
      }
    );
  }

  return Response.json(
    {
      data: comments,
    },
    {
      status: 200,
    }
  );
}

export async function POST(req: Request) {
  const { userId, content, postId } = await req.json();
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

  const comments = await prisma.comments.create({
    data: {
      userId,
      content,
      postId,
    },
    include: {
      user: true,
      post: true,
    },
  });

  if (!comments)
    return Response.json(
      {
        message: "Failed to get comment",
      },
      {
        status: 500,
      }
    );

  return Response.json(
    {
      data: comments,
    },
    {
      status: 200,
    }
  );
}
