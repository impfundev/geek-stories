"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../models/prisma";
import { Subscription } from "@prisma/client";
import { Benefit } from "../type";

export async function updatePlan(data: Subscription, benefit: Benefit[]) {
  const { id, type, price, description, isActive } = data;
  try {
    const updatePlan = await prisma.subscription.update({
      where: { id },
      data: {
        type,
        price,
        description,
        isActive,
        benefit,
      },
    });

    console.log(updatePlan);
    revalidatePath("/dashboard/subscriptions");
  } catch (error) {
    console.error(error);
  }
}
