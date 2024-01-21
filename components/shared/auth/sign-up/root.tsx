"use client";

import { useState } from "react";
import { EmailForm } from "./email";
import { NameForm } from "./name";
import { PasswordForm } from "./password";
import { AuthForm } from "@/lib/type";

export function SignUpForm({
  nameAction,
  emailAction,
  passwordAction,
}: AuthForm) {
  const [formType, setFormType] = useState("name");

  const handleFormEmail = () => {
    setFormType("email");
  };
  const handleFormPassword = () => {
    setFormType("password");
  };
  return (
    <>
      {formType === "name" && (
        <NameForm handleForm={handleFormEmail} action={nameAction} />
      )}
      {formType === "email" && (
        <EmailForm handleForm={handleFormPassword} action={emailAction} />
      )}
      {formType === "password" && <PasswordForm action={passwordAction} />}
    </>
  );
}
