"use server";

import { prisma } from "../models/prisma";

export async function getPaymentHistory() {
  const paymentHistory = await prisma.payment_History.findMany({
    include: {
      user: true,
      subscription: true,
    },
  });

  if (!paymentHistory) {
    throw new Error("Failed to get payment history");
  }

  return { paymentHistory };
}
