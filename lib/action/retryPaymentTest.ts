"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../models/prisma";
import { verifySession } from "../session";

export async function retryPaymentTest(formData: FormData) {
  const { userId } = await verifySession();
  const planId = Number(formData.get("planId"));
  await prisma.user.update({
    where: {
      id: userId as string,
    },
    data: {
      subscribeEndAt: null,
      subscribeStartAt: null,
      subscription: {
        disconnect: {
          id: planId,
        },
      },
    },
  });

  revalidatePath("/dashboard/subscription");
}
