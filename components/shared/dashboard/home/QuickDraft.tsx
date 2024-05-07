import moment from "moment";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { PostType } from "@/lib/models/schema";

export async function QuickDraft({ posts }: { posts: PostType }) {
  const draftedPosts = posts.filter((post) => post.published === "draft");

  return (
    <Card className="drop-shadow-lg">
      <CardHeader>
        <CardTitle>Quick Draft</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="p-6">
        <form className="w-full flex flex-col gap-6">
          <fieldset className="flex flex-col gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" />
            <span className="text-muted-foreground">
              The title is how it appears on your site.
            </span>
          </fieldset>
          <fieldset className="max-w-md flex flex-col gap-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="What's on your mind?"
            />
            <span className="text-muted-foreground">
              The description is not prominent by default; however, some themes
              may show it.
            </span>
          </fieldset>
          <Button type="submit">Save Draft</Button>
        </form>
      </CardContent>
      <Separator />
      <CardFooter className="flex-col items-start gap-2">
        <h3 className="text-xl font-bold pt-6">Your Recent Drafts</h3>
        <ul>
          {draftedPosts.length > 0 ? (
            draftedPosts.map((post) => (
              <li key={post.id} className="flex gap-4">
                <Link
                  className="text-blue-500"
                  href={`/editor/posts/${post.id}`}
                >
                  {post.title}
                </Link>
                <time
                  className="text-muted-foreground"
                  dateTime={post.updateAt.toTimeString()}
                >
                  {moment(post.updateAt.getTime()).fromNow()}
                </time>
              </li>
            ))
          ) : (
            <p className="text-muted-foreground">
              There are no new drafts at this time.
            </p>
          )}
        </ul>
      </CardFooter>
    </Card>
  );
}
