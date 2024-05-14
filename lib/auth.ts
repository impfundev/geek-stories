import { prisma } from "./models/prisma";
import { verifySession } from "./session";

export async function isAuthorized(req: Request) {
  const { userId } = await verifySession();
  const apiKey = await prisma.api_Key.findUnique({
    where: { user_id: userId as string },
  });

  const authorization = req.headers.get("authorization");
  if (authorization !== apiKey?.value) {
    return false;
  }
  return true;
}
