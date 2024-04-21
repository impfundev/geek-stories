"use client";

import { useState } from "react";
import { JsonValue } from "@prisma/client/runtime/library";
import { JSONContent } from "novel";
import { Media, Tags } from "@/lib/models/schema";
import { createPost, updatePost } from "@/lib/action";

import { NavEditor } from "./NavEditor";
import { AddFeatured } from "./form/media/add-featured-image";
import { FormEditor } from "./form/form-editor";
import { useRouter } from "next/navigation";
import { UpdateInput } from "./form/update-input";
import { TitleInput } from "./form/title-input";
import { NovelEditor } from "./novel-editor";

type EditorType = {
  id?: string;
  tags: Tags;
  media: {
    resources: Media;
  };
  initialContent?: JsonValue;
};

export function Editor({ id, tags, media, initialContent }: EditorType) {
  const [isFormVisible, setFormVisible] = useState(true);
  const [status, setStatus] = useState<"draft" | "upload">("draft");
  const router = useRouter();

  return (
    <form action={id ? updatePost : createPost}>
      <NavEditor
        handleForm={() => setFormVisible(!isFormVisible)}
        handleBack={() => router.back()}
        setStatus={setStatus}
      />
      <UpdateInput />
      <input name="published" id="published" hidden value={status} readOnly />
      <input name="postId" id="postId" hidden value={id} readOnly />
      <div className="w-full flex gap-4 justify-between pb-10">
        <div className="w-full flex flex-col gap-4">
          <AddFeatured media={media} />
          <TitleInput />
          <NovelEditor initialContent={initialContent as JSONContent} />
        </div>
        {isFormVisible && <FormEditor tags={tags} />}
      </div>
    </form>
  );
}
