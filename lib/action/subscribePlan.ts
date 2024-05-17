"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../models/prisma";
import moment from "moment";
import { cookies } from "next/headers";
import { verifySession } from "../session";

type SubscribePlan = {
  paymentId: string;
  paymentStatus: string;
};

export async function subscribePlan({
  paymentId,
  paymentStatus,
}: SubscribePlan) {
  const { userId } = await verifySession();
  const getPlanId = cookies().get("plan_id")?.value;
  const planId = Number(getPlanId);

  if (!getPlanId) return revalidatePath("/dashboard", "layout");

  const inOneMonth = new Date();
  inOneMonth.setMonth(inOneMonth.getMonth() + 1);

  await prisma.user.update({
    where: {
      id: userId as string,
    },
    data: {
      subscription: {
        connect: {
          id: planId,
        },
      },
      subscribeStartAt: new Date(),
      subscribeEndAt: inOneMonth,
      payment_history: {
        create: {
          id: paymentId,
          subscription_id: planId,
          status: paymentStatus,
        },
      },
    },
    include: {
      subscription: true,
    },
  });

  cookies().delete("plan_id");
  revalidatePath("/dashboard", "layout");
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

  if (!user.subscribeStartAt) {
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
