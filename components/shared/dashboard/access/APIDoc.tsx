import { ApiTest } from "./APITest";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ApiDoc() {
  return (
    <Tabs defaultValue="posts">
      <TabsList>
        <TabsTrigger value="posts">Posts</TabsTrigger>
        <TabsTrigger value="pages">Pages</TabsTrigger>
        <TabsTrigger value="tags">Tags</TabsTrigger>
        <TabsTrigger value="site">Site Info</TabsTrigger>
        <TabsTrigger value="comments">Comments</TabsTrigger>
      </TabsList>
      <TabsContent value="posts" className="flex flex-col gap-6">
        <ApiTest
          label="Get all posts"
          endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`}
          description="Test get all posts"
          method="GET"
        />
        <ApiTest
          label="Get single posts"
          endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/1`}
          description="Test get single posts by id, this test will use id=1"
          method="GET"
        />
        <ApiTest
          label="Limit and skip posts"
          endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?limit=2&skip=1`}
          description="You can pass 'limit' and 'skip' params to limit and skip the results for pagination, in this test will use limit=2 & skip=1"
          method="GET"
        />
      </TabsContent>
      <TabsContent value="pages" className="flex flex-col gap-6">
        <ApiTest
          label="Get all pages"
          endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/pages`}
          description="Test get all pages"
          method="GET"
        />
        <ApiTest
          label="Get single pages"
          endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/pages/1`}
          description="Test get single pages by id, this test will use id=1"
          method="GET"
        />
        <ApiTest
          label="Limit and skip pages"
          endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/pages?limit=2&skip=1`}
          description="You can pass 'limit' and 'skip' params to limit and skip the results for pagination, in this test will use limit=2 & skip=1"
          method="GET"
        />
      </TabsContent>
      <TabsContent value="tags" className="flex flex-col gap-6">
        <ApiTest
          label="Get all tags"
          endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/tags`}
          description="Test get all pages"
          method="GET"
        />
        <ApiTest
          label="Get single tags"
          endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/tags/1`}
          description="Test get single posts by id, this test will use id=1"
          method="GET"
        />
        <ApiTest
          label="Limit and skip tags"
          endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/tags?limit=2&skip=1`}
          description="You can pass 'limit' and 'skip' params to limit and skip the results for pagination, in this test will use limit=2 & skip=1"
          method="GET"
        />
      </TabsContent>
      <TabsContent value="site" className="flex flex-col gap-6">
        <ApiTest
          label="Get site information"
          endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/site`}
          description="Test get site information"
          method="POST"
        />
      </TabsContent>
      <TabsContent value="comments" className="flex flex-col gap-6">
        <ApiTest
          label="Get all comments"
          endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/comments`}
          description="Test get all comments. *Test add comment still not works in this doc. Try use tools like Postman and send request to this endpoint with method POST and body = { userId: string, content: string, postId: number }."
          method="GET"
        />
      </TabsContent>
    </Tabs>
  );
}
