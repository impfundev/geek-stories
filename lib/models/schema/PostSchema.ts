import { z } from "zod";
import { UserSchema } from ".";

export const PostSchema = z.object({
  title: z.string(),
  createAt: z.date().default(new Date()),
  updateAt: z.date().default(new Date()),
  content: z.string(),
  excerpt: z.string(),
  published: z.enum(["draft", "upload"]),
  featured: z.preprocess((value) => value === "on", z.boolean()),
  thumbnail_url: z.string(),
  thumbnail_alt: z.string(),
  thumbnail_width: z.string(),
  thumbnail_height: z.string(),
  tags: z.array(
    z.object({
      name: z.string(),
    })
  ),
  author: UserSchema,
  authorId: z.string(),
});
