import { SignUpForm } from "@/components/shared/auth/sign-up/root";

export default function SignUpPage() {
  async function nameAction(formData: FormData) {
    "use server";

    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    console.log(firstname, lastname);
  }
  async function emailAction(formData: FormData) {
    "use server";

    const email = formData.get("email");
    console.log(email);
  }
  async function passwordAction(formData: FormData) {
    "use server";

    const password = formData.get("password");
    const confirm_password = formData.get("confirm_password");
    console.log(password);
    console.log(confirm_password);
  }
  return (
    <SignUpForm
      nameAction={nameAction}
      emailAction={emailAction}
      passwordAction={passwordAction}
    />
  );
}
