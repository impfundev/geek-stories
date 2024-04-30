import { TablePages } from "@/components/shared/dashboard/table/pages";
import { getPages } from "@/lib/action/getPages";

export default async function Pages() {
  const { pages } = await getPages();
  return (
    <>
      <h1>Pages</h1>
      <div className="py-6">
        <TablePages data={pages} />
      </div>
    </>
  );
}
