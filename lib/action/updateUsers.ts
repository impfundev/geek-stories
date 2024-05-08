"use server";
import { SignupFormSchema, FormState } from "../models/schema";
import { prisma } from "../models/prisma";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { getUser } from "./getUser";
import { revalidatePath } from "next/cache";

export async function updateUsers(state: FormState, formData: FormData) {
  const currentUser = await getUser();

  if (!currentUser.user) {
    redirect("/login");
  }

  const newPassword = formData.get("password");
  const currentPassword = currentUser.user.password;

  // Form validation
  const validatedFields = SignupFormSchema.safeParse({
    userName: formData.get("userName"),
    email: formData.get("email"),
    password: newPassword ? newPassword : currentPassword,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { userName, email, password } = validatedFields.data;

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const bio = formData.get("bio") as string;

  // Hasing password
  const hashedPassword = newPassword
    ? await bcrypt.hash(password, 10)
    : currentPassword;

  // Check is username already used
  const isNewUserName = userName !== currentUser.user.userName;
  const isUserNameUsed = await prisma.user.findUnique({
    where: { userName },
  });

  if (isNewUserName && isUserNameUsed) {
    return {
      message: "Username is already used. Please enter another username.",
    };
  }

  // Check is email already used
  const isNewEmail = email !== currentUser.user.email;
  const isEmailUsed = await prisma.user.findUnique({
    where: { email },
  });

  if (isNewEmail && isEmailUsed) {
    return {
      message: "Email is already used. Please enter another email.",
    };
  }

  // Update user

  const user = await prisma.user.update({
    where: { email: currentUser.user.email },
    data: {
      userName,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      bio,
    },
  });

  if (!user) {
    console.error(state?.message, state?.errors);
    return {
      message: "Something error on the server.",
    };
  }

  console.log(user);
  revalidatePath("/dashboard/profile");
  return {
    success: "Update user profile success.",
  };
}
