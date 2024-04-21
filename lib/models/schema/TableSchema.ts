import { z } from "zod";

export const TableSchema = z.object({
  title: z.string(),
  createAt: z.date().nullable().default(new Date()),
  updateAt: z.date().nullable().default(new Date()),
  published: z.enum(["draft", "upload"]),
  featured: z.preprocess((value) => value === "on", z.boolean()),
});
