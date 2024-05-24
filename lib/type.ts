import type { Pages, Posts, Tags } from "@prisma/client";
import { ISizeCalculationResult } from "image-size/dist/types/interface";
import { JSONContent } from "novel";
import { Dispatch, SetStateAction } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

export type NavEditor = {
  handleForm?: () => void;
  handleBack?: () => void;
  onStatusChange: UseFormSetValue<Posts & { tags: Tags[] }>;
  isLoading?: boolean;
};

export type UpdateButton = {
  action: UseFormSetValue<Posts & { tags: Tags[] }>;
  pending?: boolean;
};

export type TitleInput = {
  title: string;
  register: UseFormRegister<Posts & { tags: Tags[] }>;
};

export type Editor = {
  initialContent?: JSONContent;
  onPostsUpdate?: UseFormSetValue<Posts & { tags: Tags[] }>;
  onPagesUpdate?: UseFormSetValue<Pages>;
};

export type FormEditor = {
  allTag: Tags[];
  postTag: Tags[];
  excerpt: string;
  register: UseFormRegister<Posts & { tags: Tags[] }>;
  onValueChange: UseFormSetValue<Posts & { tags: Tags[] }>;
};

export type SelectTag = {
  allTag: Tags[];
  postTag: Tags[];
  action: UseFormSetValue<Posts & { tags: Tags[] }>;
};

export type Media = {
  url: string;
  width: string | number | null;
  height: string | number | null;
};

export type Thumbnail = {
  url?: string | null;
  width?: string | number | null;
  height?: string | number | null;
};

export type MediaData = {
  media: Media[];
  thumbnail?: Thumbnail;
  onValueChange: UseFormSetValue<Posts & { tags: Tags[] }>;
};

export type DialogMediaType = {
  media: Media[];
  action: UseFormSetValue<Posts & { tags: Tags[] }>;
  onThumbnailChange: Dispatch<SetStateAction<Thumbnail | null>>;
};

export type Benefit = {
  value: string;
} | null;
