"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../models/prisma";

export async function createPlan(formData: FormData) {
  const type = formData.get("name") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;
  const benefit1 = formData.get("benefit-1");
  const benefit2 = formData.get("benefit-2");
  const benefit3 = formData.get("benefit-3");
  const benefit4 = formData.get("benefit-4");
  const benefit5 = formData.get("benefit-5");

  let allBenefit = [{ value: benefit1 as string }];

  if (benefit2) allBenefit.push({ value: benefit2 as string });
  if (benefit3) allBenefit.push({ value: benefit3 as string });
  if (benefit4) allBenefit.push({ value: benefit4 as string });
  if (benefit5) allBenefit.push({ value: benefit5 as string });

  try {
    const createPlan = await prisma.subscription.create({
      data: {
        type,
        price,
        description,
        benefit: allBenefit,
        isActive: true,
      },
    });

    console.log(createPlan);
    revalidatePath("/dashboard/subscriptions");
  } catch (error) {
    console.error(error);
  }
}
