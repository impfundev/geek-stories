import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthForm } from "@/lib/type";
import Link from "next/link";

export function EmailForm({ handleForm, action }: AuthForm) {
  return (
    <form
      onSubmit={handleForm}
      action={action}
      className="p-10 flex flex-col gap-6"
    >
      <div className="text-center">
        <h1 className="text-xl">Sign in</h1>
        <p>Use your GeekStories Account</p>
      </div>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        required
      />
      <Button type="submit">Next</Button>
      <p>
        Don't have an account?{" "}
        <Link className="text-primary" href="/auth/sign-up">
          Create Account
        </Link>
        .
      </p>
    </form>
  );
}
