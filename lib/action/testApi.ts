"use server";

import { prisma } from "../models/prisma";
import { verifySession } from "../session";
import axios from "axios";

export async function testAPi(state: any, formData: FormData) {
  const { userId } = await verifySession();
  const apiKey = await prisma.api_Key.findUnique({
    where: { user_id: userId as string },
  });

  if (!apiKey)
    return {
      status: 404,
      message: "API Key not found",
    };

  const endpoint = formData.get("endpoint") as string;
  const method = formData.get("method") as string;
  const body = formData.get("body") as string | undefined;
  let testApi;
  const options = {
    method,
    url: endpoint,
    headers: {
      authorization: `${apiKey.value}`,
    },
  };

  if (body) {
    testApi = await axios.request(options);

    return {
      status: testApi.status,
      message: testApi.statusText,
      result: testApi.data,
    };
  }

  testApi = await axios.request(options);

  return {
    status: testApi.status,
    message: "Success",
    result: testApi.data,
  };
}
