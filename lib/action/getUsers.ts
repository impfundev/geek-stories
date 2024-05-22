"use server";
import { prisma } from "../models/prisma";

export async function getUsers() {
    const users = await prisma.user.findMany({
        include: {
          subscription: true,
          payment_history: true,
        },
      });
  
    return { users };
}
