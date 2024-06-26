"use server";
import { FormState } from "../models/schema";
import { prisma } from "../models/prisma";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { createSession } from "../session";

export async function login(state: FormState, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) return { message: "Email invalid, please enter valid email." };

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid)
    return {
      message: "Password invalid, please enter valid password.",
    };

  await createSession(user.id);
  redirect("/dashboard");
}
