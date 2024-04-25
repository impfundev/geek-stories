import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { SelectTag } from "./tag-input";
import type { FormEditor } from "@/lib/type";

export function FormEditor({
  allTag,
  postTag,
  excerpt,
  register,
  onValueChange,
}: FormEditor) {
  return (
    <Card className={cn("w-full max-w-[20vw] h-full")}>
      <CardContent className="py-4 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="excerpt" className="flex flex-col gap-2">
            <span>Excerpt:</span>
            <span className="text-sm">Maximum 150 character</span>
          </label>
          <Textarea
            {...register("excerpt")}
            defaultValue={excerpt}
            placeholder="Enter excerpt"
            maxLength={150}
          />
        </div>
        <div className="flex flex-col gap-2">
          <SelectTag allTag={allTag} postTag={postTag} action={onValueChange} />
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" {...register("featured")} />
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
