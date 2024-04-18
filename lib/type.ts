import { Dispatch, SetStateAction } from "react";

export type User = {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  role: "ADMIN" | "USER";
};

export type AuthForm = {
  handleForm?: () => void;
  action?: (formData: FormData) => Promise<void>;
  nameAction?: (formData: FormData) => Promise<void>;
  emailAction?: (formData: FormData) => Promise<void>;
  passwordAction?: (formData: FormData) => Promise<void>;
  isValid?: boolean;
};

export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
};

export type UserTypes = {
  id: string;
  firstname: string;
  lastname?: string;
};

export type Tag = {
  id: number;
  name: string | null;
};

export type NavEditor = {
  handleForm?: () => void;
  handleBack?: () => void;
  setStatus: Dispatch<SetStateAction<"save" | "upload">>;
};

export type Media = {
  asset_id: string;
  public_id: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  bytes: number;
  width: number;
  height: number;
  folder: string;
  access_mode: string;
  url: string;
  secure_url: string;
};

export type MediaData = {
  media: {
    resources: Media[];
  };
};

export type DialogMediaType = {
  media: {
    resources: Media[];
  };
  action: Dispatch<
    SetStateAction<{ src: string; width: string; height: string; alt: string }>
  >;
};
