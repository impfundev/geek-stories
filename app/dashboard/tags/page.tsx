import { Card } from "@/components/ui/card";
import { CreateTagForm } from "@/components/shared/dashboard/tags/CreateTagsForm";
import { getTag } from "@/lib/action";
import { TableTags } from "@/components/shared/dashboard/tags/TableTags";

export default async function Tags() {
  const { tags } = await getTag();

  return (
    <>
      <h1>Tags</h1>
      <div className="py-6 flex flex-col md:flex-row gap-10">
        <Card>
          <CreateTagForm />
        </Card>
        <TableTags tags={tags} />
      </div>
    </>
  );
}
