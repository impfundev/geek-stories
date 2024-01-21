"use client";

import { Editor as NovelEditor } from "novel";
import { NavEditor } from "./nav-editor";
import { useState } from "react";
import { UploadImage } from "./form/upload-image";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { FormEditor } from "./form/form-editor";
import { useRouter } from "next/navigation";

type File = {
  target: HTMLInputElement & EventTarget;
};

export async function Editor() {
  const [addFeatured, setAddFeatured] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [isFormVisible, setFormVisible] = useState(true);
  const router = useRouter();

  const handleFeaturedImage = () => {
    setAddFeatured(!addFeatured);
    setSelectedImage(undefined);
  };
  const imageChange = (e: File) => {
    if (e.target.files && e.target.files.length > 0) {
      const file: any = e.target.files[0];
      setSelectedImage(file);
    }
  };
  const handleFormVisible = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <form>
      <NavEditor
        handleForm={handleFormVisible}
        handleBack={() => router.back()}
      />
      <div className="w-full flex flex-col gap-2 items-center">
        {addFeatured && (
          <>
            {selectedImage ? (
              <img
                className="w-[800px] h-[400px] object-cover"
                src={URL.createObjectURL(selectedImage)}
                alt="Thumb"
              />
            ) : (
              <UploadImage onChange={imageChange} />
            )}
          </>
        )}
        <button
          onClick={handleFeaturedImage}
          className="text-sm flex gap-2 items-center"
        >
          {addFeatured ? (
            <>
              Add Featured Image <MinusCircleIcon size={20} />
            </>
          ) : (
            <>
              Add Featured Image <PlusCircleIcon size={20} />
            </>
          )}
        </button>
        <div className="flex gap-4">
          <NovelEditor className="w-full" />
          {isFormVisible && <FormEditor />}
        </div>
      </div>
    </form>
  );
}
