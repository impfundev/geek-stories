import { TableList } from "@/components/shared/table";
import { pages } from "@/lib/dummy-data";

export default function Pages() {
  return (
    <>
      <h1>Pages</h1>
      <div className="py-6">
        <TableList posts={pages} />{" "}
      </div>
    </>
  );
}
