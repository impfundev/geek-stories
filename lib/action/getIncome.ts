"use server";

import moment from "moment";
import { prisma } from "../models/prisma";

export async function getIncomes() {
  const payments = await prisma.payment_History.findMany({
    include: {
      subscription: true
    },
  });

  const incomes = payments.map((payment) => {
    return {
      date: moment(payment.date.getTime()).format("MMMM Do YYYY"),
      incomes: Number(payment.subscription?.price),
    }
  })

  return { incomes };
}
