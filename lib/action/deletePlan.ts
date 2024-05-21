"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../models/prisma";

export async function deletePlan(formData: FormData) {
  const id = Number(formData.get("planId"));
  try {
    const updatePlan = await prisma.subscription.delete({
      where: { id },
    });

    console.log(updatePlan);
    revalidatePath("/dashboard/subscriptions");
  } catch (error) {
    console.error(error);
  }
}
