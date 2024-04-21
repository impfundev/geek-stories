import { z } from "zod";

export const TagsSchema = z.array(
  z.object({
    id: z.string().nullable(),
    name: z.string(),
  })
);
