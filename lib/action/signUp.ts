"use server";
import { SignupFormSchema, FormState } from "../models/schema";
import { prisma } from "../models/prisma";
import { redirect } from "next/navigation";
import { hash } from "bcrypt";
import { createSession } from "../session";
import { generateApiKey } from "../auth";

export async function signUp(state: FormState, formData: FormData) {
  // Form validation
  const validatedFields = SignupFormSchema.safeParse({
    userName: formData.get("userName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };

  const { userName, email, password } = validatedFields.data;

  // Hasing password
  const hashedPassword = await hash(password, 10);

  // Check is username already used
  const isUserNameUsed = await prisma.user.findUnique({
    where: { userName },
  });

  if (isUserNameUsed)
    return {
      message: "Username is already used. Please enter another username.",
    };

  // Check is email already used
  const isEmailUsed = await prisma.user.findUnique({
    where: { email },
  });

  if (isEmailUsed)
    return {
      message: "Email is already used. Please go to the login page.",
    };

  // Create user
  const api_key = await generateApiKey(64);
  const user = await prisma.user.create({
    data: {
      userName,
      email,
      password: hashedPassword,
      role: "admin",
      api_key: {
        create: {
          value: api_key,
        },
      },
      site_info: {
        create: {
          name: "My Site",
          description: "My site description",
        },
      },
    },
    include: {
      api_key: true,
    },
  });

  if (!user)
    return {
      message: "Something error on the server.",
    };

  await createSession(user.id);

  console.log(user);
  redirect("/dashboard");
}
