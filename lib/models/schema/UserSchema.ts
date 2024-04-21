import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  userName: z.string(),
  email: z.string(),
  password: z.string(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  bio: z.string().nullable(),
});
