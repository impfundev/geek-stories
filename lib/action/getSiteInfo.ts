"use server";

import { prisma } from "../models/prisma";
import { verifySession } from "../session";

export async function getSiteInfo() {
  const { userId } = await verifySession();
  const siteInfo = await prisma.site_Info.findUnique({
    where: { user_id: userId as string },
  });

  return { siteInfo };
}
