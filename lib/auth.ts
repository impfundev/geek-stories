import { prisma } from "./models/prisma";

export async function isAuthorized(token: string | null) {
  if (!token) return false;
  const authorized = await prisma.api_Key.findUnique({
    where: { value: token },
  });

  if (!authorized) return false;

  return true;
}

export async function generateApiKey(length: number) {
  let result = "";
  let charset =
    "!@#$^&*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset[randomIndex];
  }

  return result;
}
