export type AuthForm = {
  handleForm?: () => void;
  action?: (formData: FormData) => Promise<void>;
  nameAction?: (formData: FormData) => Promise<void>;
  emailAction?: (formData: FormData) => Promise<void>;
  passwordAction?: (formData: FormData) => Promise<void>;
};

export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
};
