"use server";

import { prisma } from "../models/prisma";

export async function getApiKey(user_id: string) {
  const apiKey = await prisma.api_Key.findUnique({
    where: { user_id },
  });

  if (!apiKey) throw new Error("Failed to get API KEY");

  return { apiKey };
}
