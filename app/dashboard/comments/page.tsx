import { TableComment } from "@/components/shared/dashboard/table/comments";
import { getComments } from "@/lib/action";

export default async function Comments() {
  const { comments } = await getComments();
  const data = comments.sort((a, b) => {
    let dateA = a.updateAt.getTime();
    let dateB = b.updateAt.getTime();

    return dateB - dateA;
  });

  return (
    <>
      <h1>Comments</h1>
      <div className="py-6">
        <TableComment data={data} />
      </div>
    </>
  );
}
