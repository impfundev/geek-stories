import { ApiTest } from "../APITest";
import { TabsContent } from "@/components/ui/tabs";

export function TestSiteInfoApi() {
  return (
    <TabsContent value="site" className="flex flex-col gap-6">
      <ApiTest
        label="Get site information"
        endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/site`}
        description="Test get site information"
        method="POST"
      />
    </TabsContent>
  );
}
