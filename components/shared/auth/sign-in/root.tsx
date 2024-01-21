"use client";

import { useState } from "react";
import { EmailForm } from "./email";
import { PasswordForm } from "./password";
import { AuthForm } from "@/lib/type";

export function SignInForm({ emailAction, passwordAction }: AuthForm) {
  const [formType, setFormType] = useState("email");
  const handleFormPassword = () => {
    setFormType("password");
  };
  return (
    <>
      {formType === "email" && (
        <EmailForm handleForm={handleFormPassword} action={emailAction} />
      )}
      {formType === "password" && <PasswordForm action={passwordAction} />}
    </>
  );
}
