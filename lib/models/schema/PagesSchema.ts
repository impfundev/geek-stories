import { z } from "zod";
import { UserSchema } from "@/lib/models/schema/UserSchema";

export const PagesSchema = z.object({
  id: z.number(),
  author: UserSchema.nullable(),
  authorId: z.string(),
  title: z.string(),
  createAt: z.date(),
  updateAt: z.date(),
  content: z.string().nullable(),
  jsonContent: z.any(),
  published: z.enum(["draft", "upload"]),
});
