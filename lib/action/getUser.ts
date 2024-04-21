"use server";
import { prisma } from "../models/prisma";
import { verifySession } from "../session";

export async function getUser() {
  const session = await verifySession();

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: session.userId as string,
      },
    });

    return { user, error: null };
  } catch (error) {
    return { user: null, error: "Failed to fetch user" };
  }
}
