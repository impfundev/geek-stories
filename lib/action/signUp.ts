"use server";
import { SignupFormSchema, FormState } from "../models/schema";
import { prisma } from "../models/prisma";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { createSession } from "../session";

export async function signUp(state: FormState, formData: FormData) {
  // Form validation
  const validatedFields = SignupFormSchema.safeParse({
    userName: formData.get("userName"),
    email: formData.get("email"),
    password: formData.get("password"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    bio: formData.get("bio"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { userName, email, password } = validatedFields.data;

  // Hasing password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Check is username already used
  const isUserNameUsed = await prisma.user.findUnique({
    where: { userName },
  });

  if (isUserNameUsed) {
    return {
      message: "Username is already used. Please enter another username.",
    };
  }

  // Check is email already used
  const isEmailUsed = await prisma.user.findUnique({
    where: { email },
  });

  if (isEmailUsed) {
    return {
      message: "Email is already used. Please go to the login page.",
    };
  }

  // Create user
  const user = await prisma.user.create({
    data: {
      userName,
      email,
      password: hashedPassword,
      role: "admin",
    },
  });

  if (!user) {
    console.error(state?.message, state?.errors);
    return {
      message: "Something error on the server.",
    };
  }

  // Create session
  await createSession(user.id);

  console.log(user);
  redirect("/dashboard");
}