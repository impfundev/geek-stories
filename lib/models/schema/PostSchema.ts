import { z } from "zod";
import { UserSchema } from "@/lib/models/schema/UserSchema";

export const PostSchema = z.object({
  id: z.string(),
  author: UserSchema.nullable(),
  authorId: z.string().nullable(),
  title: z.string(),
  createAt: z.date().nullable(),
  updateAt: z.date().nullable(),
  content: z.string().nullable(),
  jsonContent: z.any(),
  excerpt: z.string().nullable(),
  published: z.enum(["draft", "upload"]),
  featured: z.preprocess((value) => value === "on", z.boolean()),
  thumbnail_url: z.string().nullable(),
  thumbnail_alt: z.string().nullable(),
  thumbnail_width: z.string().nullable(),
  thumbnail_height: z.string().nullable(),
  tags: z
    .array(
      z
        .object({
          name: z.string(),
        })
        .nullable()
    )
    .nullable(),
});
