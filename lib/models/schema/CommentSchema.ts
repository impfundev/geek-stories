import { z } from "zod";

export const CommentSchema = z.object({
  id: z.number(),
  userId: z.string(),
  content: z.string(),
  postId: z.number(),
});
