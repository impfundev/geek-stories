import moment from "moment";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { PostType } from "@/lib/models/schema";
import { GravatarOptions, getGravatarUrl } from "react-awesome-gravatar";

export function RecentActivity({ posts }: { posts: PostType }) {
  return (
    <Card className="drop-shadow-lg">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {posts
            .sort((a, b) => {
              let dateA = a.updateAt.getTime();
              let dateB = b.updateAt.getTime();

              return dateB - dateA;
            })
            .map((post, i) => {
              const pictureOptions: GravatarOptions = {
                size: 40,
              };
              const pictureUrl = getGravatarUrl(
                post!.author!.email,
                pictureOptions
              );

              return (
                <div
                  key={i}
                  className="w-full flex items-center justify-between gap-10"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={pictureUrl} alt="Avatar" />
                      <AvatarFallback>
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="font-medium flex gap-2">
                        <span>{post.title}</span>
                        <Badge>{post.published}</Badge>
                      </div>
                      <p className="text-muted-foreground">
                        {post.author?.userName}
                      </p>
                    </div>
                  </div>
                  <time
                    className="text-muted-foreground"
                    dateTime={post.updateAt.toTimeString()}
                  >
                    {moment(post.updateAt.getTime()).fromNow()}
                  </time>
                </div>
              );
            })}
        </div>
      </CardContent>
    </Card>
  );
}
