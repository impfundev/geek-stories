"use server";
import { prisma } from "../models/prisma";

export async function getSubscriptionPlans() {
  const plans = await prisma.subscription.findMany();

  return { plans };
}
