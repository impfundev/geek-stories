import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { getPosts } from "@/lib/action";
import Link from "next/link";

export async function TotalPost() {
  const { posts } = await getPosts();
  const totalPost = posts.length;
  const publishedPost = posts.filter(
    (post) => post.published === "upload"
  ).length;
  const draftedPost = posts.filter((post) => post.published === "draft").length;

  return (
    <div className="flex flex-col gap-4">
      <Card className="drop-shadow-lg">
        <CardTitle className="p-4 text-xl text-center">Total Post</CardTitle>
        <CardContent className="px-4 text-center text-4xl font-bold">
          {totalPost}
        </CardContent>
      </Card>
      <div className="flex gap-4 items-center">
        <Card className="drop-shadow-lg">
          <CardTitle className="p-4 text-xl">Published Post</CardTitle>
          <CardContent className="px-4 text-center text-4xl font-bold">
            {publishedPost}
          </CardContent>
        </Card>
        <Card className="drop-shadow-lg">
          <CardTitle className="p-4 text-xl">Drafted Post</CardTitle>
          <CardContent className="px-4 text-center text-4xl font-bold">
            {draftedPost}
          </CardContent>
        </Card>
      </div>
      <Button asChild>
        <Link href="/dashboard/posts">Manage Posts</Link>
      </Button>
    </div>
  );
}
