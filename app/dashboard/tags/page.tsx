import { TableList } from "@/components/shared/dashboard/table";
import { tags } from "@/lib/dummy-data";

export default function Tags() {
  return (
    <>
      <h1>Tags</h1>
      <div className="py-6">
        <TableList posts={tags} />{" "}
      </div>
    </>
  );
}
