import { logOut } from "@/lib/action";
import { createClient } from "@/lib/auth/supabase/server";

export async function Account() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getSession();
  if (error || !data.session?.user) {
    return (
      <div className="w-full flex justify-between">
        <span>User not found</span>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-between">
      <span>{data.session.user.email}</span>
      <img
        src={data.session.user.user_metadata.avatar_url}
        className="w-6 h-6 rounded-full object-cover"
      />
      <form action={logOut}>
        <button type="submit">Log out</button>
      </form>
    </div>
  );
}
