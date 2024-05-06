import { TablePosts } from "@/components/shared/dashboard/table/posts";
import { getPosts } from "@/lib/action";

export default async function Posts() {
  const { posts } = await getPosts();
  return (
    <>
      <h1>Posts</h1>
      <div className="py-6">
        <TablePosts
          data={posts.sort((a, b) => {
            let dateA = a.updateAt.getTime();
            let dateB = b.updateAt.getTime();

            return dateB - dateA;
          })}
        />
      </div>
    </>
  );
}
