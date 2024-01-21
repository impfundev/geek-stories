import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { posts, Posts } from "@/lib/dummy-data";

const data: Posts[] = posts;

export function RecentPosts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Posts</CardTitle>
        <CardDescription>Latest posts in your blog</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {data.map((post, i) => {
            const date = new Date(post.date);
            const options = {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            };
            return (
              <div key={i} className="flex items-center gap-20">
                <div className="flex items-center gap-4">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={post.authorAvatar} alt="Avatar" />
                    <AvatarFallback>
                      <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {post.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {post.author}
                    </p>
                  </div>
                </div>
                <time
                  className="text-sm text-muted-foreground"
                  dateTime={post.date}
                >
                  {date.toDateString()}
                </time>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
