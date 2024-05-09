"use server";
import { prisma } from "../models/prisma";

export async function getSubscriptionPlans() {
  const data = await prisma.subscription.findMany();

  return { data };
}
