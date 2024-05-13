"use server";

import { prisma } from "../models/prisma";

export async function getPaymentHistory() {
  const paymentHistory = await prisma.payment_History.findMany({
    include: {
      subscription: true,
    },
  });

  if (!paymentHistory) {
    throw new Error("Failed to get payment history");
  }

  return { paymentHistory };
}
