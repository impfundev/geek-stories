"use client";

import {
  EditorBubble,
  EditorCommand,
  EditorCommandEmpty,
  EditorCommandItem,
  EditorContent,
  EditorRoot,
  JSONContent,
} from "novel";
import { useState } from "react";
import { defaultExtensions } from "./extensions";
import { suggestionItems } from "./extensions/slash-command";
import {
  ColorSelector,
  LinkSelector,
  NodeSelector,
  TextButtons,
} from "./extensions/bubble-menu";

export function NovelEditor({
  initialContent,
}: {
  initialContent?: JSONContent;
}) {
  const [content, setContent] = useState<string>("");
  const [jsonContent, setJsonContent] = useState<JSONContent | undefined>(
    undefined
  );

  const [openNode, setOpenNode] = useState<boolean>(false);
  const [openLink, setOpenLink] = useState<boolean>(false);
  const [openColor, setOpenColor] = useState<boolean>(false);
  const extensions = [...defaultExtensions];

  return (
    <EditorRoot>
      <EditorContent
        initialContent={initialContent}
        extensions={extensions}
        onUpdate={({ editor }) => {
          const html = editor.getHTML();
          const json = editor.getJSON();
          setContent(html);
          setJsonContent(json);
        }}
        editorProps={{
          attributes: {
            class: `prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full`,
          },
        }}
      >
        <input hidden id="content" name="content" value={content} readOnly />
        <input
          hidden
          id="jsonContent"
          name="jsonContent"
          value={JSON.stringify(jsonContent)}
          readOnly
        />
        <EditorBubble className="flex w-fit max-w-[90vw] overflow-hidden rounded border border-muted bg-background shadow-xl">
          <NodeSelector open={openNode} onOpenChange={setOpenNode} />
          <LinkSelector open={openLink} onOpenChange={setOpenLink} />
          <TextButtons />
          <ColorSelector
            open={openColor}
            onOpenChange={setOpenColor}
            isOpen={openColor}
            setIsOpen={setOpenColor}
          />
        </EditorBubble>
        <EditorCommand className="z-50 h-auto max-h-[330px]  w-72 overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all">
          <EditorCommandEmpty className="px-2 text-muted-foreground">
            No results
          </EditorCommandEmpty>
          {suggestionItems.map((item) => (
            <EditorCommandItem
              value={item.title}
              onCommand={(val) => item.command!(val)}
              className={`flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent `}
              key={item.title}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                {item.icon}
              </div>
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </EditorCommandItem>
          ))}
        </EditorCommand>
      </EditorContent>
    </EditorRoot>
  );
}
