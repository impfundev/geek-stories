import { ApiTest } from "../APITest";
import { TabsContent } from "@/components/ui/tabs";

export function TestMediaApi() {
  return (
    <TabsContent value="media" className="flex flex-col gap-6">
      <ApiTest
        label="Get all media"
        endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/media`}
        description="Test get all media"
        method="GET"
      />
    </TabsContent>
  );
}
