"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { JSONContent } from "novel";
import { updatePost } from "@/lib/action";

import { NavEditor } from "./NavEditor";
import { AddFeatured } from "./form/media/add-featured-image";
import { FormEditor } from "./form/form-editor";
import { redirect, useRouter } from "next/navigation";
import { DateInput } from "./form/DateInput";
import { TitleInput } from "./form/title-input";
import { NovelEditor } from "./novel-editor";
import type { Posts, Tags } from "@prisma/client";
import { Media } from "@/lib/type";

type EditorType = {
  allTag: Tags[];
  postTag: Tags[];
  media: Media[];
  post: Posts;
};

export function Editor({ post, allTag, postTag, media }: EditorType) {
  const [isFormVisible, setFormVisible] = useState(true);
  const [status, setStatus] = useState<"draft" | "upload">("draft");
  const router = useRouter();

  if (!post) redirect("/dashboard/posts");

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Posts & { tags: Tags }>();
  const onSubmit: SubmitHandler<Posts> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <NavEditor
        handleForm={() => setFormVisible(!isFormVisible)}
        handleBack={() => router.back()}
        onStatusChange={setStatus}
      />

      <input
        value={JSON.stringify(new Date())}
        {...register("updateAt")}
        readOnly
        hidden
      />
      <input value={post.id} {...register("id")} hidden readOnly />
      <input value={status} {...register("published")} hidden readOnly />

      <div className="w-full flex gap-4 justify-between pb-10">
        <div className="w-full flex flex-col gap-4">
          <AddFeatured
            register={register}
            media={media}
            thumbnail={post.thumbnail_url}
          />
          <TitleInput register={register} title={post.title} />
          <NovelEditor
            register={register}
            initialContent={post.jsonContent as JSONContent}
          />
        </div>
        {isFormVisible && (
          <FormEditor
            excerpt={post.excerpt!}
            allTag={allTag}
            postTag={postTag}
            register={register}
          />
        )}
      </div>
    </form>
  );
}
