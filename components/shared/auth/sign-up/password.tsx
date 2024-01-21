import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthForm } from "@/lib/type";
import Link from "next/link";

export function PasswordForm({ action }: AuthForm) {
  return (
    <form action={action} className="p-10 flex flex-col gap-6">
      <div className="text-center">
        <h1 className="text-xl">Create a GeekStories Account</h1>
        <p>Enter your password</p>
      </div>
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        required
      />
      <Input
        type="password"
        id="confirm_password"
        name="confirm_password"
        placeholder="Confirm password"
        required
      />
      <Button type="submit">Submit</Button>
      <p>
        Already have account?{" "}
        <Link className="text-primary" href="/auth/sign-in">
          Sign In
        </Link>
        .
      </p>
    </form>
  );
}
