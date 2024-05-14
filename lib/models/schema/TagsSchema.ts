import { z } from "zod";

export const TagsSchema = z.object({
  id: z.number(),
  name: z.string().nullable(),
});
