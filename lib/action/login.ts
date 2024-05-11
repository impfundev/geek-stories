"use server";
import { FormState } from "../models/schema";
import { LoginFormSchema } from "../models/schema/LoginFormSchema";
import { prisma } from "../models/prisma";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { createSession } from "../session";

export async function login(state: FormState, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    console.error(validatedFields.error.flatten().fieldErrors);
    return { message: "Error: Something error on the server." };
  }

  const { email, password } = validatedFields.data;

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

  await createSession(user.id, user.isSubscribed);
  console.log(user);
  redirect("/dashboard");
}
