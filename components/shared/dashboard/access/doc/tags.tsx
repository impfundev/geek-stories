import { useApiTest } from "@/hooks/useApiTest";
import { ApiTest } from "../APITest";
import { TabsContent } from "@/components/ui/tabs";

export function TestTagsApi() {
  const { limit, skip } = useApiTest();

  return (
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
        type="pagination"
        endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/tags?limit=${limit}&skip=${skip}`}
        description="You can pass 'limit' and 'skip' params to limit and skip the results for pagination."
        method="GET"
      />
    </TabsContent>
  );
}
