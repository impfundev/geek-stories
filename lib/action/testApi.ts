"use server";

import { prisma } from "../models/prisma";
import { verifySession } from "../session";

export async function testAPi(state: any, formData: FormData) {
  const { userId } = await verifySession();
  const endpoint = formData.get("endpoint") as string;
  const method = formData.get("method") as string;

  const apiKey = await prisma.api_Key.findUnique({
    where: { user_id: userId as string },
  });

  if (!apiKey)
    return {
      status: 404,
      message: "API Key not found",
    };

  let testApi, options;

  if (method === "POST")
    options = {
      method,
      headers: {
        authorization: `${apiKey.value}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId }),
    };
  else
    options = {
      method,
      headers: {
        authorization: `${apiKey.value}`,
      },
    };

  testApi = await fetch(endpoint, options);
  const result = await testApi.json();
  const status = testApi.status;
  const message = testApi.statusText;

  return {
    status,
    message,
    result,
  };
}
