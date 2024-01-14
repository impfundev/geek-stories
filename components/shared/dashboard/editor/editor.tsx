"use client";

import { EditorContent, BubbleMenu, useEditor } from "@tiptap/react";
import React, { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  BubbleMenuComponent,
  MenuBarComponent,
} from "@/components/shared/dashboard/editor/menubar";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import { Button } from "@/components/ui/button";
import { ChevronLeftCircle, MinusIcon, PlusIcon } from "lucide-react";
import { NavEditor } from "./nav-editor";
import { FormEditor } from "./form/form-editor";
import { UploadImage } from "./form/upload-image";

type File = {
  target: HTMLInputElement & EventTarget;
};

export function Editor() {
  const [openForm, setOpenForm] = useState(true);
  const [addImage, setAddImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const handleAddImage = () => {
    setAddImage(!addImage);
    setSelectedImage(undefined);
  };
  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };
  const imageChange = (e: File) => {
    if (e.target.files && e.target.files.length > 0) {
      let files: any = e.target.files[0];
      setSelectedImage(files);
    }
  };

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
      Link.configure({
        openOnClick: true,
        autolink: true,
      }),
    ],
    content: "<p>Start writing here...",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
  });
  return (
    <>
      <NavEditor handleForm={handleOpenForm}>
        <Button variant="secondary" className="gap-2 rounded-full">
          <ChevronLeftCircle size={20} absoluteStrokeWidth /> Back
        </Button>
        <MenuBarComponent editor={editor} />
      </NavEditor>

      <div className="flex mx-auto">
        <Card
          className={cn(
            "h-screen mx-auto border-none shadow-none py-5 w-[60vw]"
          )}
        >
          <CardContent>
            {addImage && (
              <>
                {selectedImage ? (
                  <>
                    {selectedImage && (
                      <div>
                        <img
                          className="w-full h-64 object-cover"
                          src={URL.createObjectURL(selectedImage)}
                          alt="Thumbnail"
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <UploadImage onChange={imageChange} />
                )}
              </>
            )}
            <button
              onClick={handleAddImage}
              className="flex gap-2 items-center text-sm py-4"
            >
              {addImage ? (
                <>
                  Remove featured image{" "}
                  <MinusIcon size={20} absoluteStrokeWidth />
                </>
              ) : (
                <>
                  Add featured image <PlusIcon size={20} absoluteStrokeWidth />
                </>
              )}
            </button>
            {editor && (
              <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
                <Card
                  className={cn(
                    "flex flex-col w-[200px] h-56 overflow-y-auto hide-scrollbar"
                  )}
                >
                  <BubbleMenuComponent editor={editor} />
                </Card>
              </BubbleMenu>
            )}
            <div className="pt-2">
              <label htmlFor="title" className="text-sm">
                max 70 character
              </label>
              <textarea
                className="w-full max-w-screen text-4xl text-foreground bg-background focus:outline-none hide-scrollbar"
                maxLength={70}
                placeholder="Enter Title"
                name="title"
              />
            </div>
            <EditorContent editor={editor} />
          </CardContent>
        </Card>
        {openForm && <FormEditor />}
      </div>
    </>
  );
}
