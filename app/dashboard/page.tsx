import { RecentPosts } from "@/components/shared/dashboard/home/recent-post";
import { TotalPost } from "@/components/shared/dashboard/home/total-post";

export default function Dashboard() {
  return (
    <>
      <h1>Home</h1>
      <div className="w-full py-6">
        <div className="flex gap-10">
          <TotalPost />
          <RecentPosts />
        </div>
      </div>
    </>
  );
}
