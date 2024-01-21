import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { SelectTag } from "@/components/shared/dashboard/editor/form/tag-input";
import { Checkbox } from "@/components/ui/checkbox";

export function FormEditor() {
  return (
    <Card className={cn("my-6 max-h-72")}>
      <CardContent className="py-4 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="excerpt">Excerpt</label>
          <Textarea name="excerpt" placeholder="Enter excerpt" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="tag">Tags</label>
          <SelectTag />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="featured" />
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
