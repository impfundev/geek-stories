import type { Posts, Tags } from "@prisma/client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DeleteTag } from "./DeleteTag";

interface TableTags extends Tags {
  posts: Posts[];
}

export function TableTags({ tags }: { tags: TableTags[] }) {
  return (
    <Table>
      <TableCaption>A list of your tags.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Post Count</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tags.map((tag) => (
          <TableRow key={tag.id}>
            <TableCell className="font-medium">{tag.name}</TableCell>
            <TableCell>{tag.posts.length}</TableCell>
            <TableCell>
              <DeleteTag tagId={tag.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
