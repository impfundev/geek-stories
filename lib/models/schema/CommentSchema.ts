import { z } from "zod";

export const CommentSchema = z.object({
  id: z.string(),
  userId: z.string(),
  content: z.string(),
  postId: z.string(),
});
