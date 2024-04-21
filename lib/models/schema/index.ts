import { z } from "zod";
import { SignupFormSchema } from "./SignupFormSchema";
import { LoginFormSchema } from "./LoginFormSchema";
import { SessionPayloadSchema } from "./SessionPayloadSchema";
import { PostSchema } from "./PostSchema";
import { TagsSchema } from "./TagsSchema";
import { MediaSchema } from "./MediaSchema";
import { TableSchema } from "./TableSchema";
import { UserSchema } from "./UserSchema";

export type User = z.infer<typeof UserSchema>;

export type SignUpForm = z.infer<typeof SignupFormSchema>;

export type SessionPayload = z.infer<typeof SessionPayloadSchema>;

export type Post = z.infer<typeof PostSchema>;

export const AllPost = z.array(PostSchema);
export type AllPostType = z.infer<typeof AllPost>;

export type Tags = z.infer<typeof TagsSchema>;

export type Media = z.infer<typeof MediaSchema>;

export type TableData = z.infer<typeof TableSchema>;

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

export {
  PostSchema,
  UserSchema,
  SignupFormSchema,
  LoginFormSchema,
  SessionPayloadSchema,
  TagsSchema,
  MediaSchema,
  TableSchema,
};
