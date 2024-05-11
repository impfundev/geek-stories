import { z } from "zod";

export const SessionPayloadSchema = z.object({
  userId: z.string(),
  expiresAt: z.date(),
  isSubscribed: z.boolean().default(false),
});
