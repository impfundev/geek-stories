import { useApiTest } from "@/hooks/useApiTest";
import { ApiTest } from "../APITest";
import { TabsContent } from "@/components/ui/tabs";

export function TestPagesApi() {
  const { limit, skip } = useApiTest();

  return (
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
        type="pagination"
        endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/pages?limit=${limit}&skip=${skip}`}
        description="You can pass 'limit' and 'skip' params to limit and skip the results for pagination."
        method="GET"
      />
    </TabsContent>
  );
}
