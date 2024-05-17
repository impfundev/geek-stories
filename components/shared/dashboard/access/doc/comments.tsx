import { ApiTest } from "../APITest";
import { TabsContent } from "@/components/ui/tabs";

export function TestCommentsApi() {
  return (
    <TabsContent value="comments" className="flex flex-col gap-6">
      <ApiTest
        label="Get all comments"
        endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/comments`}
        description="Test get all comments. *Test add comment still not works in this doc. Try use tools like Postman and send request to this endpoint with method POST and body = { userId: string, content: string, postId: number }."
        method="GET"
      />
    </TabsContent>
  );
}
