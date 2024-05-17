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

  const tags = await prisma.tags.findUnique({
    where: { id: Number(id) },
  });

  if (!tags)
    return Response.json(
      {
        message: `Tags with id: ${id} not found`,
      },
      {
        status: 404,
      }
    );

  return Response.json(
    {
      data: tags,
    },
    {
      status: 200,
    }
  );
}
