import { z } from "zod";
import { UserSchema } from "@/lib/models/schema/UserSchema";
import { v4 as uuidv4 } from "uuid";

export const PostSchema = z.object({
  id: z.string().default(uuidv4()),
  title: z.string(),
  createAt: z.date().default(new Date()),
  updateAt: z.date().default(new Date()),
  content: z.string().nullable(),
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
