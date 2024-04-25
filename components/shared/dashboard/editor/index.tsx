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

type EditorType = {
  allTag: Tags[];
  media: Media[];
  post: Posts;
};

export function Editor({ post, allTag, media }: EditorType) {
  const [isFormVisible, setFormVisible] = useState(true);
  const router = useRouter();

  const thumbnail = {
    url: post.thumbnail_url,
    width: post.thumbnail_width,
    height: post.thumbnail_height,
  };

  if (!post) redirect("/dashboard/posts");

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { isLoading },
  } = useForm<Posts & { tags: Tags[] }>({
    defaultValues: post,
  });
  const onSubmit: SubmitHandler<Posts & { tags: Tags[] }> = (data) => {
    updatePost(data).then((res) => console.log(res));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <NavEditor
        handleForm={() => setFormVisible(!isFormVisible)}
        handleBack={() => router.back()}
        onStatusChange={setValue}
        isLoading={isLoading}
      />

      <div className="w-full flex gap-4 justify-between pb-10">
        <div className="w-full flex flex-col gap-4">
          <AddFeatured
            onValueChange={setValue}
            media={media}
            thumbnail={thumbnail}
          />
          <TitleInput register={register} title={post.title} />
          <NovelEditor
            onUpdateAction={setValue}
            initialContent={post.jsonContent as JSONContent}
          />
        </div>
        {isFormVisible && (
          <FormEditor
            excerpt={post.excerpt!}
            allTag={allTag}
            postTag={getValues("tags")}
            register={register}
            onValueChange={setValue}
          />
        )}
      </div>
    </form>
  );
}
