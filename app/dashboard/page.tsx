import { Glance } from "@/components/shared/dashboard/home/Glance";
import { QuickDraft } from "@/components/shared/dashboard/home/QuickDraft";
import { RecentActivity } from "@/components/shared/dashboard/home/RecentActivity";
import { getPosts, getPages, getTag } from "@/lib/action";

export default async function Dashboard() {
  const { posts } = await getPosts();
  const { pages } = await getPages();
  const { tags } = await getTag();

  return (
    <>
      <h1>Home</h1>
      <div className="w-full py-6">
        <div className="flex gap-4">
          <div className="grid grid-cols-1 gap-4">
            <Glance posts={posts} pages={pages} tags={tags} />
            <RecentActivity posts={posts} />
          </div>
          <QuickDraft posts={posts} />
        </div>
      </div>
    </>
  );
}
