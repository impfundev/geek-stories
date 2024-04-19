"use server";

import { revalidatePath } from "next/cache";
import axios from "axios";
import { PostSchema, TagsSchema, AllPost } from "./schema";
import { prisma } from "./models";

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
