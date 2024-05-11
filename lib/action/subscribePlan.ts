"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../models/prisma";
import moment from "moment";

export async function subscribePlan(formData: FormData) {
  const userId = formData.get("userId") as string;
  const planId = formData.get("planId") as string;
  const inOneMonth = new Date();
  inOneMonth.setMonth(inOneMonth.getMonth() + 1);

  try {
    const updateUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        subscription_id: Number(planId),
        isSubscribed: true,
        subscribeStartAt: new Date(),
        subscribeEndAt: inOneMonth,
      },
      include: {
        subscription: true,
      },
    });

    revalidatePath("/dashboard", "layout");
    return updateUser;
  } catch (error) {
    throw new Error("Failed to subscribe");
  }
}

// Create checkSubsription to check is user subscription is expired or not

export async function checkSubscription(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (!user.isSubscribed) {
    return {
      isSubscribed: false,
      message: "You are not subscribed to any plan, choose your plan:",
    };
  }

  const now = new Date();

  if (now > user.subscribeEndAt!) {
    return {
      isSubscribed: false,
      message: "Your subscription has expired, extend or choose another plan:",
    };
  }

  const subscribeEndAt = moment(user.subscribeEndAt?.getTime()).format(
    "MMMM Do YYYY, h:mm:ss a"
  );

  return {
    isSubscribed: true,
    message: `Your subscription is active until ${subscribeEndAt}`,
  };
}
