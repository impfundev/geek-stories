import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { SelectTag } from "./tag-input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tags } from "@/lib/schema";

export function FormEditor({ tags }: { tags: Tags }) {
  return (
    <Card className={cn("w-full max-w-[20vw] h-full")}>
      <CardContent className="py-4 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="excerpt">Excerpt</label>
          <Textarea id="excerpt" name="excerpt" placeholder="Enter excerpt" />
        </div>
        <div className="flex flex-col gap-2">
          <SelectTag tags={tags} />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="featured" name="featured" />
          <label
            htmlFor="featured"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Featured
          </label>
        </div>
      </CardContent>
    </Card>
  );
}
