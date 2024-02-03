"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { Toolbar } from "./toolbar";
import { useState } from "react";

export function TiptapEditor() {
  const [content, setContent] = useState("");
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Placeholder.configure({
        placeholder: "Writing something here...",
      }),
      Link.configure({
        openOnClick: true,
        autolink: true,
      }),
    ],
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setContent(html);
    },
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <Card className={cn("w-full p-10")}>
      <CardContent>
        <input
          className="hidden"
          name="content"
          id="content"
          value={content}
          readOnly
        />
        {editor && (
          <>
            <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
              <Card>
                <CardContent className="w-full p-2">
                  <Toolbar editor={editor} />
                </CardContent>
              </Card>
            </BubbleMenu>
          </>
        )}
        <div className="prose mx-auto">
          <input
            className="w-full text-4xl tracking-wider bg-background pb-6 focus:outline-none"
            placeholder="Title"
            name="title"
            id="title"
            type="text"
            required
          />
          <EditorContent editor={editor} />
        </div>
      </CardContent>
    </Card>
  );
}
