import { UpdateUserForm } from "@/components/shared/auth/UpdateUserForm";
import { getUser } from "@/lib/action";
import { redirect } from "next/navigation";

export default async function Profile() {
  const { user } = await getUser();

  if (!user) {
    redirect("/login");
  }

  return <UpdateUserForm user={user} />;
}
