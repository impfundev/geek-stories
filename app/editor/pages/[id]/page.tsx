import { redirect } from "next/navigation";

import { EditorPages } from "@/components/shared/dashboard/editor/EditorPages";

import { prisma } from "@/lib/models/prisma";
import { getPages } from "@/lib/action";

export default async function EditorPagesPage({
  params,
}: {
  params: { id: string };
}) {
  const pages = await prisma.pages.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!pages) redirect("/dashboard");

  return <EditorPages pages={pages} />;
}

export async function generateStaticParams() {
  const { pages } = await getPages();

  return pages.map((page) => ({
    id: page.id,
  }));
}
