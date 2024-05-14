import { prisma } from "@/lib/models/prisma";

export async function GET(req: Request) {
  const comments = await prisma.comments.findMany({
    include: {
      user: true,
      post: true,
    },
  });

  if (!comments) {
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
      data: comments,
    },
    {
      status: 200,
    }
  );
}

export async function POST(req: Request) {
  const { userId, content, postId } = await req.json();
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

  if (!comments) {
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
      data: comments,
    },
    {
      status: 200,
    }
  );
}
