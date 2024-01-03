import { TableList } from "@/components/shared/table";
import { posts } from "@/lib/dummy-data";

export default function Posts() {
  return (
    <>
      <h1>Posts</h1>
      <div className="py-6">
        <TableList posts={posts} />{" "}
      </div>
    </>
  );
}
