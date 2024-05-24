"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { JSONContent } from "novel";
import { updatePost } from "@/lib/action";

import { NavEditor } from "./NavEditor";
import { AddFeatured } from "./form/media/add-featured-image";
import { FormEditor } from "./form/form-editor";
import { redirect, useRouter } from "next/navigation";
import { TitleInput } from "./form/title-input";
import { NovelEditor } from "./novel-editor";
import type { Posts, Tags } from "@prisma/client";
import { Media } from "@/lib/type";
import { Card } from "@/components/ui/card";

type EditorType = {
  allTag: Tags[];
  media: Media[];
  post: Posts;
};

export function EditorPosts({ post, allTag, media }: EditorType) {
  const [isFormVisible, setFormVisible] = useState(true);
  const [pending, setPending] = useState(false);
  const router = useRouter();

  if (!post) redirect("/dashboard/posts");

  const thumbnail = {
    url: post.thumbnail_url,
    width: post.thumbnail_width,
    height: post.thumbnail_height,
  };

  const { register, handleSubmit, setValue, getValues } = useForm<
    Posts & { tags: Tags[] }
  >({
    defaultValues: post,
  });

  const onSubmit: SubmitHandler<Posts & { tags: Tags[] }> = (data) => {
    setPending(true);
    updatePost(data).then(() => setPending(false));
  };

  return (
    <div className="w-full justify-between pb-10 flex gap-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <NavEditor
          handleForm={() => setFormVisible(!isFormVisible)}
          handleBack={() => router.back()}
          onStatusChange={setValue}
          isLoading={pending}
        />
        <div
          className={`pt-20 ${
            isFormVisible ? "max-w-[75vw]" : ""
          } flex flex-col gap-4`}
        >
          <TitleInput register={register} title={post.title} />
          <NovelEditor
            onPostsUpdate={setValue}
            initialContent={post.jsonContent as JSONContent}
          />
        </div>
      </form>
      {isFormVisible && (
        <Card className="fixed top-20 right-16 max-w-[20vw] h-[80vh] overflow-y-auto flex flex-col gap-4 p-2">
          <AddFeatured
            onValueChange={setValue}
            media={media}
            thumbnail={thumbnail}
          />
          <FormEditor
            excerpt={post.excerpt!}
            allTag={allTag}
            postTag={getValues("tags")}
            register={register}
            onValueChange={setValue}
          />
        </Card>
      )}
    </div>
  );
}
