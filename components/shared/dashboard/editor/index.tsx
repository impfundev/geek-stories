"use client";

import { createPost } from "@/lib/action";
import { NavEditor } from "./nav-editor";
import { useState } from "react";
import { UploadImage } from "./form/upload-image";
import { FormEditor } from "./form/form-editor";
import { useRouter } from "next/navigation";
import { TagsTypes } from "@/lib/type";
import { TiptapEditor } from "./editor";
import { Button } from "@/components/ui/button";
import { Image, TrashIcon } from "lucide-react";

export function Editor({ tags }: TagsTypes) {
  const [addFeatured, setAddFeatured] = useState(false);
  const [isFormVisible, setFormVisible] = useState(true);
  const [status, setStatus] = useState("");
  const router = useRouter();

  const handleFeaturedImage = () => {
    setAddFeatured(!addFeatured);
  };
  const handleFormVisible = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <form action={createPost}>
      <NavEditor
        handleForm={handleFormVisible}
        handleBack={() => router.back()}
        setStatus={setStatus}
      />
      <input
        name="status"
        id="status"
        className="hidden"
        value={status}
        readOnly
      />
      <div className="w-full flex gap-4 justify-between pb-10">
        <div className="w-full flex flex-col gap-4">
          {addFeatured && <UploadImage />}
          <Button
            type="button"
            variant="outline"
            onClick={handleFeaturedImage}
            className={`gap-2 ${
              addFeatured
                ? "hover:bg-destructive hover:text-background"
                : "hover:bg-primary hover:text-background"
            }`}
          >
            {addFeatured ? (
              <>
                <TrashIcon size={20} strokeWidth={1.5} /> Remove Featured Image
              </>
            ) : (
              <>
                <Image size={20} strokeWidth={1.5} /> Add Featured Image
              </>
            )}
          </Button>
          <TiptapEditor />
        </div>
        {isFormVisible && <FormEditor tags={tags} />}
      </div>
    </form>
  );
}
