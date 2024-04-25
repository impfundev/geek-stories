import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTag } from "@/lib/action";

export default async function Tags() {
  const { tags } = await getTag();

  return (
    <>
      <h1>Tags</h1>
      <div className="py-6 flex gap-10">
        <Card>
          <CardContent className="py-4 flex flex-col gap-6">
            <h2>Create Tag</h2>
            <fieldset>
              <Label htmlFor="tagName">Name:</Label>
              <Input id="tagName" placeholder="Enter tag name" />
            </fieldset>
            <Button size="sm">Submit</Button>
          </CardContent>
        </Card>
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
                  <Badge>Delete</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
