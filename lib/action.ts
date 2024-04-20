"use server";

import { revalidatePath } from "next/cache";
import axios from "axios";
import {
  PostSchema,
  TagsSchema,
  AllPost,
  SignupFormSchema,
  LoginFormSchema,
  FormState,
} from "./schema";
import { prisma } from "./models";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { createSession, deleteSession, verifySession } from "./session";

export async function signUp(state: FormState, formData: FormData) {
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

  const isUserNameUsed = await prisma.user.findUnique({
    where: { userName },
  });
  const isEmailUsed = await prisma.user.findUnique({
    where: { email },
  });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      userName,
      email,
      password: hashedPassword,
      role: "admin",
    },
  });

  if (isUserNameUsed) {
    return {
      message: "Username is already used.",
    };
  } else if (isEmailUsed) {
    return {
      message: "Email is already used.",
    };
  } else if (!user) {
    console.error(state?.message, state?.errors);
    return {
      message: "Something error on the server.",
    };
  } else {
    await createSession(user.id);

    console.log(user);
    redirect("/dashboard");
  }
}

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

  await createSession(user.id);
  console.log(user);
  redirect("/dashboard");
}

export async function logout() {
  deleteSession();
  redirect("/login");
}

export async function getUser() {
  const session = await verifySession();

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: session.userId as string,
      },
    });

    return { user, error: null };
  } catch (error) {
    return { user: null, error: "Failed to fetch user" };
  }
}

export async function createPost(formData: FormData) {
  const {
    title,
    content,
    excerpt,
    published,
    featured,
    thumbnail_url,
    thumbnail_alt,
    thumbnail_width,
    thumbnail_height,
    tags,
  } = PostSchema.parse({
    title: formData.get("title"),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    published: formData.get("status"),
    featured: formData.get("featured"),
    thumbnail_url: formData.get("thumbnail-src"),
    thumbnail_alt: formData.get("thumbnail-alt"),
    thumbnail_height: formData.get("thumbnail-height"),
    thumbnail_width: formData.get("thumbnail-width"),
    tags: JSON.parse(formData.get("tags") as string),
  });

  const postData = await prisma.posts.create({
    data: {
      title,
      authorId: "",
      excerpt,
      content,
      published,
      featured,
      thumbnail_url,
      thumbnail_alt,
      thumbnail_width,
      thumbnail_height,
      tags: {
        create: tags,
      },
    },
  });

  revalidatePath("/dashboard/posts");
  console.log(postData);
  return;
}

export async function getPosts() {
  const data = await prisma.posts.findMany({
    include: {
      tags: true,
    },
  });
  const posts = AllPost.parse(data);
  return { posts };
}

export async function createTag(formData: FormData) {
  const name = formData.get("create_tag_name") as string;
  try {
    const tag = await prisma.tags.create({
      data: {
        name,
      },
    });
    revalidatePath("/editor");
    return tag;
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function getTag() {
  const data = await prisma.tags.findMany();
  const tags = TagsSchema.parse(data);
  return { tags };
}

export async function uploadImage(formData: FormData) {
  const file: File = formData.get("file") as File;
  if (!file) {
    throw new Error("No file uploaded");
  }
  formData.append("upload_preset", "CsHR42qLL5hn9Ik23");

  const featured = await axios.post(
    "https://api.cloudinary.com/v1_1/dlf8ittab/image/upload",
    formData
  );
  revalidatePath("/editor");
  console.log(featured);
  return;
}
