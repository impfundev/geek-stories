import type { Posts, Tags } from "@prisma/client";
import { ISizeCalculationResult } from "image-size/dist/types/interface";
import { JSONContent } from "novel";
import { Dispatch, SetStateAction } from "react";
import { UseFormRegister } from "react-hook-form";

export type NavEditor = {
  handleForm?: () => void;
  handleBack?: () => void;
  onStatusChange: Dispatch<SetStateAction<"draft" | "upload">>;
};

export type TitleInput = {
  title: string;
  register: UseFormRegister<Posts & { tags: Tags }>;
};

export type Editor = {
  initialContent?: JSONContent;
  register: UseFormRegister<Posts & { tags: Tags }>;
};

export type FormEditor = {
  allTag: Tags[];
  postTag: Tags[];
  excerpt: string;
  register: UseFormRegister<Posts & { tags: Tags }>;
};

export type SelectTag = {
  allTag: Tags[];
  postTag: Tags[];
  register: UseFormRegister<Posts & { tags: Tags }>;
};

export type Media = {
  url: string;
  metadata: ISizeCalculationResult;
};

export type MediaData = {
  media: Media[];
  thumbnail?: string | null;
  register: UseFormRegister<Posts & { tags: Tags }>;
};

export type DialogMediaType = {
  media: Media[];
  action: Dispatch<
    SetStateAction<{ src: string; width: string; height: string; alt: string }>
  >;
};
