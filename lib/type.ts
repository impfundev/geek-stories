import { Editor, EditorContextValue } from "@tiptap/react";
import { Dispatch, SetStateAction } from "react";

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

export type TagsTypes = {
  tags: { id: number; name: string | null }[];
};

export type Toolbar = {
  editor: Editor;
};

export type NavEditor = {
  handleForm?: () => void;
  handleBack?: () => void;
  setStatus: Dispatch<SetStateAction<string>>;
};
