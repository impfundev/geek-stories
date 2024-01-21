import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthForm } from "@/lib/type";
import Link from "next/link";

export function NameForm({ handleForm, action }: AuthForm) {
  return (
    <form
      onSubmit={handleForm}
      action={action}
      className="p-10 flex flex-col gap-6"
    >
      <div className="text-center">
        <h1 className="text-xl">Create a GeekStories Account</h1>
        <p>Enter your name</p>
      </div>
      <Input
        type="text"
        id="firstname"
        name="firstname"
        placeholder="First name"
        required
      />
      <Input
        type="text"
        id="lastname"
        name="lastname"
        placeholder="Last name (optional)"
      />
      <Button type="submit">Next</Button>
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
