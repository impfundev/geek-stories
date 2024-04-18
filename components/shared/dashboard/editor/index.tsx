"use client";

import { createPost } from "@/lib/action";
import { NavEditor } from "./nav-editor";
import { useState } from "react";
import { AddFeatured } from "./form/media/add-featured-image";
import { FormEditor } from "./form/form-editor";
import { useRouter } from "next/navigation";
import { NovelEditor } from "./novel";
import { UpdateInput } from "./form/update-input";
import { TitleInput } from "./form/title-input";
import { Media, Tags } from "@/lib/schema";

type EditorType = {
  tags: Tags;
  media: {
    resources: Media;
  };
};

export function Editor({ tags, media }: EditorType) {
  const [isFormVisible, setFormVisible] = useState(true);
  const [status, setStatus] = useState<"save" | "upload">("save");
  const router = useRouter();

  return (
    <form action={createPost}>
      <NavEditor
        handleForm={() => setFormVisible(!isFormVisible)}
        handleBack={() => router.back()}
        setStatus={setStatus}
      />
      <UpdateInput />
      <input name="status" id="status" hidden value={status} readOnly />
      <div className="w-full flex gap-4 justify-between pb-10">
        <div className="w-full flex flex-col gap-4">
          <AddFeatured media={media} />
          <TitleInput />
          <NovelEditor />
        </div>
        {isFormVisible && <FormEditor tags={tags} />}
      </div>
    </form>
  );
}
