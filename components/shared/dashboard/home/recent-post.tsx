import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { getPosts } from "@/lib/action";
import { GravatarOptions, getGravatarUrl } from "react-awesome-gravatar";

export async function RecentPosts() {
  const { posts } = await getPosts();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Posts</CardTitle>
        <CardDescription>Latest posts in your blog</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {posts.map((post, i) => {
            const pictureOptions: GravatarOptions = {
              size: 24,
            };
            const pictureUrl = getGravatarUrl(
              post.author.email,
              pictureOptions
            );

            return (
              <div key={i} className="flex items-center gap-20">
                <div className="flex items-center gap-4">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={pictureUrl} alt="Avatar" />
                    <AvatarFallback>
                      <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {post.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {post.author.userName}
                    </p>
                  </div>
                </div>
                <time
                  className="text-sm text-muted-foreground"
                  dateTime={post.updateAt.toISOString()}
                >
                  {post.updateAt.toDateString()}
                </time>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
