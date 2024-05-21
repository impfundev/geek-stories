"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../models/prisma";

export async function updatePlanStatus(formData: FormData) {
  const planId = Number(formData.get("planId"));
  const planStatus = formData.get("planStatus");
  const status = planStatus === "true" ? false : true;

  try {
    await prisma.subscription.update({
      where: { id: planId },
      data: {
        isActive: status,
      },
    });

    revalidatePath("/dashboard/subscriptions");
  } catch (error) {
    console.error(error);
  }
}
