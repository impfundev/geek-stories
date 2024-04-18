import Tags from "@/app/dashboard/tags/page";
import { z } from "zod";

export const PostSchema = z.object({
  title: z.string(),
  createAt: z.date(),
  updateAt: z.date(),
  content: z.string(),
  excerpt: z.string(),
  published: z.enum(["save", "upload"]),
  tags: z.array(
    z.object({
      name: z.string(),
    })
  ),
  featured: z.preprocess((value) => value === "on", z.boolean()),
  thumbnail_url: z.string(),
  thumbnail_alt: z.string(),
  thumbnail_width: z.string(),
  thumbnail_height: z.string(),
});

export type Post = z.infer<typeof PostSchema>;

export const AllPost = z.array(PostSchema);
export type AllPostType = z.infer<typeof AllPost>;

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type Login = z.infer<typeof LoginSchema>;

export const TagsSchema = z.array(
  z.object({
    id: z.string().nullable(),
    name: z.string(),
  })
);

export type Tags = z.infer<typeof TagsSchema>;

export const MediaSchema = z.array(
  z.object({
    asset_id: z.string(),
    public_id: z.string(),
    format: z.string(),
    version: z.number(),
    resource_type: z.string(),
    type: z.string(),
    created_at: z.string(),
    bytes: z.number(),
    width: z.number(),
    height: z.number(),
    folder: z.string(),
    access_mode: z.string(),
    url: z.string(),
    secure_url: z.string(),
  })
);

export type Media = z.infer<typeof MediaSchema>;
