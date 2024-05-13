"use server";

import { randomUUID } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function payWithSnap(formData: FormData) {
  const gross_amount = formData.get("gross_amount");
  const planId = formData.get("planId");
  const authToken = Buffer.from(process.env.NEXT_PUBLIC_SERVER_KEY!).toString(
    "base64"
  );
  const genUUID = randomUUID();

  const url = "https://app.sandbox.midtrans.com/snap/v1/transactions";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Basic ${authToken}`,
    },
    body: JSON.stringify({
      transaction_details: {
        order_id: genUUID,
        gross_amount,
      },
      credit_card: { secure: true },
    }),
  };

  const res = await fetch(url, options);
  const getToken = await res.json();
  cookies().set("plan_id", String(planId));

  redirect(getToken.redirect_url);
}
