import { Analytics } from "@/components/shared/chart/Analytics";
import { Glance } from "@/components/shared/dashboard/home/Glance";
import { QuickDraft } from "@/components/shared/dashboard/home/QuickDraft";
import { RecentActivity } from "@/components/shared/dashboard/home/RecentActivity";
import { getPosts, getPages, getTag, getComments } from "@/lib/action";

export default async function Dashboard() {
  const { posts } = await getPosts();
  const { pages } = await getPages();
  const { tags } = await getTag();
  const { comments } = await getComments();

  return (
    <>
      <h1>Home</h1>
      <div className="w-full py-6 flex flex-col gap-6">
        <Analytics />
        <div className="flex flex-col md:flex-row gap-4">
          <div className="grid grid-cols-1 gap-4">
            <Glance
              totalPost={posts.length}
              totalPages={pages.length}
              totalTags={tags.length}
              totalComments={comments.length}
            />
            <RecentActivity posts={posts} />
          </div>
          <QuickDraft posts={posts} />
        </div>
      </div>
    </>
  );
}
