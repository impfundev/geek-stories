import { SignInForm } from "@/components/shared/auth/sign-in/root";
import { sequelize } from "@/lib/sequelize";

export default function SignInPage() {
  async function emailAction(formData: FormData) {
    "use server";

    const email = formData.get("email");
    console.log(email);
  }
  async function passwordAction(formData: FormData) {
    "use server";

    const password = formData.get("password");
    console.log(password);
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
  return (
    <SignInForm emailAction={emailAction} passwordAction={passwordAction} />
  );
}
