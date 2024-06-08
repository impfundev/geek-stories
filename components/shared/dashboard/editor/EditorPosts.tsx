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
    <div className="w-full pb-10 flex gap-6 items-start">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <NavEditor
          handleForm={() => setFormVisible(!isFormVisible)}
          handleBack={() => router.back()}
          onStatusChange={setValue}
          isLoading={pending}
        />
        <div
          className={`${
            isFormVisible ? "max-w-[75vw]" : "w-full"
          } flex flex-col gap-4`}
        >
          <TitleInput register={register} title={post.title} />
          <NovelEditor
            onPostsUpdate={setValue}
            initialContent={post.jsonContent as JSONContent}
          />
        </div>
      </form>
      <div
        className={`${
          isFormVisible ? "flex" : "hidden"
        } w-full fixed top-0 right-0 md:static md:max-w-[30vw] lg:max-w-[20vw] px-10 py-16 md:px-0 md:pt-0 bg-background md:bg-transparent h-full overflow-y-auto flex-col gap-4 my-4`}
      >
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
      </div>
    </div>
  );
}
