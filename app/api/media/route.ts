import { isAuthorized } from "@/lib/auth";
import { prisma } from "@/lib/models/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
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

  const media = await prisma.media.findMany();

  if (!media) {
    return Response.json(
      {
        message: "Failed to get media",
      },
      {
        status: 500,
      }
    );
  }

  return Response.json(
    {
      data: media,
    },
    {
      status: 200,
    }
  );
}
