"use client";

import { useState } from "react";
import { JSONContent } from "novel";
import { Media } from "@/lib/models/schema";
import { updatePost } from "@/lib/action";

import { NavEditor } from "./NavEditor";
import { AddFeatured } from "./form/media/add-featured-image";
import { FormEditor } from "./form/form-editor";
import { redirect, useRouter } from "next/navigation";
import { DateInput } from "./form/DateInput";
import { TitleInput } from "./form/title-input";
import { NovelEditor } from "./novel-editor";
import type { Posts, Tags } from "@prisma/client";

type EditorType = {
  allTag: Tags[];
  postTag: Tags[];
  media: {
    resources: Media;
  };
  post: Posts;
};

export function Editor({ post, allTag, postTag, media }: EditorType) {
  const [isFormVisible, setFormVisible] = useState(true);
  const [status, setStatus] = useState<"draft" | "upload">("draft");
  const router = useRouter();

  if (!post) redirect("/dashboard/posts");

  return (
    <form action={updatePost}>
      <NavEditor
        handleForm={() => setFormVisible(!isFormVisible)}
        handleBack={() => router.back()}
        onStatusChange={setStatus}
      />
      <DateInput createAt={post.createAt} />
      <input name="postId" id="postId" hidden value={post.id} readOnly />
      <input name="published" id="published" hidden value={status} readOnly />
      <div className="w-full flex gap-4 justify-between pb-10">
        <div className="w-full flex flex-col gap-4">
          <AddFeatured media={media} />
          <TitleInput title={post.title} />
          <NovelEditor initialContent={post.jsonContent as JSONContent} />
        </div>
        {isFormVisible && (
          <FormEditor
            excerpt={post.excerpt!}
            allTag={allTag}
            postTag={postTag}
          />
        )}
      </div>
    </form>
  );
}
