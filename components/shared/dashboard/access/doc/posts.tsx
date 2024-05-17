"use client";

import { testApiContext } from "@/lib/context/apiTest.context";
import { ApiTest } from "../APITest";
import { TabsContent } from "@/components/ui/tabs";

export function TestPostsApi() {
  const { query, limit, skip } = testApiContext();

  return (
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
        type="pagination"
        label="Limit and skip posts"
        endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?limit=${limit}&skip=${skip}`}
        description="You can pass 'limit' and 'skip' params to limit and skip the results for pagination."
        method="GET"
      />
      <ApiTest
        type="search"
        label="Search posts"
        endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/search?q=${query}`}
        description="You can pass keyword with paramas 'q' to search post match by title, excerpt, or content"
        method="GET"
      />
    </TabsContent>
  );
}
