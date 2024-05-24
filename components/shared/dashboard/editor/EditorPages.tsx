"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { JSONContent } from "novel";
import { updatePages } from "@/lib/action";
import { redirect, useRouter } from "next/navigation";
import { NovelEditor } from "./novel-editor";
import type { Pages } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { ChevronLeftCircle, Loader2 } from "lucide-react";
import { useState } from "react";

type EditorType = {
  pages: Pages;
};

export function EditorPages({ pages }: EditorType) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  if (!pages) redirect("/dashboard/posts");

  const { register, handleSubmit, setValue } = useForm<Pages>({
    defaultValues: pages,
  });

  const onSubmit: SubmitHandler<Pages> = (data) => {
    setPending(true);
    updatePages(data).then(() => setPending(false));
  };

  return (
    <div className="w-full justify-between pb-10 flex gap-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="fixed inset-x-0 w-full px-16 flex justify-between items-center py-4 z-50">
          <Button type="button" onClick={() => router.back()} className="gap-2">
            <ChevronLeftCircle size={20} absoluteStrokeWidth /> Back
          </Button>
          <div className="flex gap-1 items-center rounded-full bg-background border">
            <Button
              value="draft"
              variant="ghost"
              type="submit"
              onClick={() => setValue("published", "draft")}
            >
              {pending ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                "Save draft"
              )}
            </Button>
            <Button
              value="draft"
              variant="ghost"
              type="submit"
              onClick={() => setValue("published", "draft")}
            >
              {pending ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                "Upload"
              )}
            </Button>
          </div>
        </div>
        <div className={`pt-20 flex flex-col gap-4`}>
          <div className="w-full flex flex-col gap-2 px-10 pt-6 mx-auto">
            <label htmlFor="title">Title: Maximum 85 character</label>
            <input
              placeholder="Add Title"
              defaultValue={pages.title}
              {...register("title")}
              className="bg-background text-foreground focus:outline-none text-3xl md:text-4xl lg:text-5xl font-semibold"
              maxLength={85}
            />
          </div>
          <NovelEditor
            onPagesUpdate={setValue}
            initialContent={pages.jsonContent as JSONContent}
          />
        </div>
      </form>
    </div>
  );
}
