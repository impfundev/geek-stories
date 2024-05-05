import { z } from "zod";
import { SignupFormSchema } from "./SignupFormSchema";
import { LoginFormSchema } from "./LoginFormSchema";
import { SessionPayloadSchema } from "./SessionPayloadSchema";
import { PostSchema } from "./PostSchema";
import { PagesSchema } from "./PagesSchema";
import { TagsSchema } from "./TagsSchema";
import { MediaSchema } from "./MediaSchema";
import { TableSchema } from "./TableSchema";
import { UserSchema } from "./UserSchema";
import { CommentSchema } from "./CommentSchema";

export type User = z.infer<typeof UserSchema>;

export type SignUpForm = z.infer<typeof SignupFormSchema>;

export type SessionPayload = z.infer<typeof SessionPayloadSchema>;

export type Post = z.infer<typeof PostSchema>;

export const Posts = z.array(PostSchema);
export type PostType = z.infer<typeof Posts>;

export type Page = z.infer<typeof PagesSchema>;

export const Pages = z.array(PagesSchema);
export type PagesType = z.infer<typeof Pages>;

export type Tags = z.infer<typeof TagsSchema>;

export type Media = z.infer<typeof MediaSchema>;

export type Comment = z.infer<typeof CommentSchema>;

export const Comments = z.array(CommentSchema);
export type Comments = z.infer<typeof Comments>;

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
  PagesSchema,
  UserSchema,
  CommentSchema,
  SignupFormSchema,
  LoginFormSchema,
  SessionPayloadSchema,
  TagsSchema,
  MediaSchema,
  TableSchema,
};
