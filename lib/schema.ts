import Tags from "@/app/dashboard/tags/page";
import { z } from "zod";

export const SignupFormSchema = z.object({
  userName: z
    .string()
    .min(8, { message: "Username must be at least 8 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
});
export type SignUpForm = z.infer<typeof SignupFormSchema>;

export const LoginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type FormState =
  | {
      errors?: {
        userName?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export const SessionPayloadSchema = z.object({
  userId: z.string(),
  expiresAt: z.date(),
});
export type SessionPayload = z.infer<typeof SessionPayloadSchema>;

export const PostSchema = z.object({
  title: z.string(),
  createAt: z.date().nullable().default(new Date()),
  updateAt: z.date().nullable().default(new Date()),
  content: z.string(),
  excerpt: z.string(),
  published: z.enum(["draft", "upload"]),
  tags: z.array(
    z.object({
      name: z.string(),
    })
  ),
  featured: z.preprocess((value) => value === "on", z.boolean()),
  thumbnail_url: z.string(),
  thumbnail_alt: z.string(),
  thumbnail_width: z.string(),
  thumbnail_height: z.string(),
});
export type Post = z.infer<typeof PostSchema>;

export const AllPost = z.array(PostSchema);
export type AllPostType = z.infer<typeof AllPost>;

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
export type Login = z.infer<typeof LoginSchema>;

export const TagsSchema = z.array(
  z.object({
    id: z.string().nullable(),
    name: z.string(),
  })
);
export type Tags = z.infer<typeof TagsSchema>;

export const MediaSchema = z.array(
  z.object({
    asset_id: z.string(),
    public_id: z.string(),
    format: z.string(),
    version: z.number(),
    resource_type: z.string(),
    type: z.string(),
    created_at: z.string(),
    bytes: z.number(),
    width: z.number(),
    height: z.number(),
    folder: z.string(),
    access_mode: z.string(),
    url: z.string(),
    secure_url: z.string(),
  })
);
export type Media = z.infer<typeof MediaSchema>;

export const TableSchema = z.object({
  title: z.string(),
  createAt: z.date().nullable().default(new Date()),
  updateAt: z.date().nullable().default(new Date()),
  published: z.enum(["draft", "upload"]),
  featured: z.preprocess((value) => value === "on", z.boolean()),
});
export type TableData = z.infer<typeof TableSchema>;
