"use client";

import { useFormState } from "react-dom";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { SubmitButton } from "./SubmitButton";
import { updateUsers } from "@/lib/action";

import { AlertCircle, CheckCircle } from "lucide-react";
import type { User } from "@prisma/client";
import { UserAvatar } from "./UserAvatar";

export function UpdateUserForm({ user }: { user: User }) {
  const [state, action] = useFormState(updateUsers, undefined);

  return (
    <form action={action} className="py-6 w-full flex gap-20">
      <div className="w-full flex flex-col gap-6 md:gap-10">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">Profile</h1>
            <p className="text-gray-400">
              This is how others will see you on the site.
            </p>
          </div>
          <SubmitButton>Save Changes</SubmitButton>
        </div>
        <Separator />
        {state?.message && (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>{state?.message}</AlertDescription>
          </Alert>
        )}
        {state?.success && (
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>{state?.success}</AlertDescription>
          </Alert>
        )}
        <fieldset className="flex flex-col gap-2">
          <Label htmlFor="userName">Username</Label>
          <Input
            id="userName"
            name="userName"
            type="text"
            placeholder="enter your username"
            maxLength={50}
            defaultValue={user.userName}
          />
          {state?.errors?.userName ? (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>{state?.errors?.userName}</AlertDescription>
            </Alert>
          ) : (
            <ul className="list-inside list-disc">
              <li className="text-sm text-gray-400">
                Username must be at least 8 characters long.
              </li>
              <li className="text-sm text-gray-400">
                This is your public display name. It can be your real name or a
                pseudonym.
              </li>
            </ul>
          )}
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <Label>Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            maxLength={50}
            defaultValue={user.email}
          />
          {state?.errors?.email && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>{state?.errors?.email}</AlertDescription>
            </Alert>
          )}
          <ul className="list-inside list-disc">
            <li className="text-sm text-gray-400">
              This is your public email address. It can be your work or a
              personal email.
            </li>
          </ul>
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <Label>Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your strong password"
            maxLength={50}
          />
          {state?.errors?.password ? (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                <p>Password must:</p>
                <ul className="list-inside list-disc">
                  {state.errors.password.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          ) : (
            <ul className="list-inside list-disc">
              <li className="text-sm">
                If you dont want to change the password, leave it empty.
              </li>
              <li className="text-sm text-gray-400">
                Must be at least 8 characters long.
              </li>
              <li className="text-sm text-gray-400">
                Must contain at least one letter.
              </li>
              <li className="text-sm text-gray-400">
                Must contain at least one special character.
              </li>
            </ul>
          )}
        </fieldset>
      </div>
      <div className="w-full flex flex-col gap-6 md:gap-10">
        <UserAvatar email={user.email} />
        <fieldset className="flex flex-col gap-2">
          <Label htmlFor="firstName">Firstname</Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Enter your firstname"
            maxLength={50}
            defaultValue={user.firstName || ""}
          />
          <ul className="list-inside list-disc">
            <li className="text-sm text-gray-400">
              This is your government first name. It is recommended to fill it
              in, because this has an effect on your credentials and SEO.
            </li>
          </ul>
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <Label htmlFor="lastName">Lastname</Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter your lastname"
            maxLength={50}
            defaultValue={user.lastName || ""}
          />
          <ul className="list-inside list-disc">
            <li className="text-sm text-gray-400">
              This is your government last name. It is recommended to fill it
              in, because this has an effect on your credentials and SEO.
            </li>
          </ul>
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            name="bio"
            placeholder="Enter your bio"
            maxLength={150}
            defaultValue={user.bio || ""}
          />
          <ul className="list-inside list-disc">
            <li className="text-sm text-gray-400">Maximum 150 character</li>
            <li className="text-sm text-gray-400">
              This is your short biography, it can be include your
              specialization or profession.
            </li>
            <li className="text-sm text-gray-400">
              It is recommended to fill it in, because this has an effect on
              your credentials and SEO.
            </li>
          </ul>
        </fieldset>
      </div>
    </form>
  );
}
