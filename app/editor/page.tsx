import { Editor } from "@/components/shared/dashboard/editor";
import { prisma } from "@/lib/models";

export default async function EditorPage() {
  const tags = await prisma.tags.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return <Editor tags={tags} />;
}
