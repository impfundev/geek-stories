export const dynamic = "force-dynamic";
import { isAuthorized } from "@/lib/auth";
import { prisma } from "@/lib/models/prisma";

export async function POST(req: Request) {
  const { userId } = await req.json();
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

  const siteInfo = await prisma.site_Info.findUnique({
    where: { user_id: userId },
    include: {
      user: true,
    },
  });

  if (!siteInfo)
    return Response.json(
      {
        message: "Site information is not found",
      },
      {
        status: 404,
      }
    );

  return Response.json(
    {
      data: siteInfo,
    },
    {
      status: 200,
    }
  );
}
