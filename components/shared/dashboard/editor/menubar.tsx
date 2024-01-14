"use client";

import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { EditorContextValue } from "@tiptap/react";
import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Italic,
  Link2,
  Link2Off,
  List,
  ListOrdered,
  Pilcrow,
  Quote,
  Redo,
  Save,
  Strikethrough,
  Undo,
  Upload,
} from "lucide-react";
import { useCallback, useState } from "react";

export function BubbleMenuComponent({ editor }: EditorContextValue) {
  if (!editor) {
    return null;
  }

  const [linkActive, setLinkActive] = useState(false);
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt(
      "Enter URL. Use https:// for external link, eg: https://www.google.com. This is not required for internal links:",
      previousUrl
    );
    // cancelled
    if (url === null) {
      return;
    }
    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      setLinkActive(!linkActive);
      return;
    }
    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    setLinkActive(!linkActive);
  }, [editor]);

  const setUnLink = () => {
    editor.chain().focus().unsetLink().run();
    setLinkActive(!linkActive);
  };

  return (
    <>
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className="flex items-center justify-between w-full px-6 py-4 rounded-none"
        variant="outline"
      >
        <Bold size={20} absoluteStrokeWidth /> Bold
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className="flex items-center justify-between w-full px-6 py-4 rounded-none"
        variant="outline"
      >
        <Italic size={20} absoluteStrokeWidth /> Italic
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className="flex items-center justify-between w-full px-6 py-4 rounded-none"
        variant="outline"
      >
        <Strikethrough size={20} absoluteStrokeWidth /> Strike Through
      </Button>
      <Button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className="flex items-center justify-between w-full px-6 py-4 rounded-none"
        variant="outline"
      >
        <Pilcrow size={20} absoluteStrokeWidth /> Paragraph
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className="flex items-center justify-between w-full px-6 py-4 rounded-none"
        variant="outline"
      >
        <Heading1 size={20} absoluteStrokeWidth />
        Heading 1
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className="flex items-center justify-between w-full px-6 py-4 rounded-none"
        variant="outline"
      >
        <Heading2 size={20} absoluteStrokeWidth />
        Heading 2
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className="flex items-center justify-between w-full px-6 py-4 rounded-none"
        variant="outline"
      >
        <Heading3 size={20} absoluteStrokeWidth />
        Heading 3
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className="flex items-center justify-between w-full px-6 py-4 rounded-none"
        variant="outline"
      >
        <Heading4 size={20} absoluteStrokeWidth />
        Heading 4
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className="flex items-center justify-between w-full px-6 py-4 rounded-none"
        variant="outline"
      >
        <Heading5 size={20} absoluteStrokeWidth />
        Heading 5
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className="flex items-center justify-between w-full px-6 py-4 rounded-none"
        variant="outline"
      >
        <Heading6 size={20} absoluteStrokeWidth />
        Heading 6
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className="flex items-center justify-between w-full px-6 py-4 rounded-none"
        variant="outline"
      >
        <List /> Bullet List
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className="flex items-center justify-between w-full px-6 py-4 rounded-none"
        variant="outline"
      >
        <ListOrdered /> Ordered List
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className="flex items-center justify-between w-full px-6 py-4 rounded-none"
        variant="outline"
      >
        <Code /> Code
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className="flex items-center justify-between w-full px-6 py-4 rounded-none"
        variant="outline"
      >
        <Quote /> Blockquote
      </Button>
      {editor.isActive("link") ? (
        <Button
          onClick={setUnLink}
          className="flex items-center justify-between w-full px-6 py-4 rounded-none"
          variant="outline"
        >
          <Link2Off /> Unlink
        </Button>
      ) : (
        <Button
          onClick={setLink}
          className="flex items-center justify-between w-full px-6 py-4 rounded-none"
          variant="outline"
        >
          <Link2 /> Link
        </Button>
      )}
    </>
  );
}

export function MenuBarComponent({ editor }: EditorContextValue) {
  if (!editor) {
    return null;
  }

  const [linkActive, setLinkActive] = useState(false);
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt(
      "Enter URL. Use https:// for external link, eg: https://www.google.com. This is not required for internal links:",
      previousUrl
    );
    // cancelled
    if (url === null) {
      return;
    }
    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      setLinkActive(!linkActive);
      return;
    }
    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    setLinkActive(!linkActive);
  }, [editor]);

  const setUnLink = () => {
    editor.chain().focus().unsetLink().run();
    setLinkActive(!linkActive);
  };

  return (
    <ToggleGroup type="multiple" className="px-2 bg-secondary rounded-full">
      <ToggleGroupItem
        title="Undo"
        value="undo"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <Undo size={20} absoluteStrokeWidth />
      </ToggleGroupItem>
      <ToggleGroupItem
        title="Redo"
        value="redo"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <Redo size={20} absoluteStrokeWidth />
      </ToggleGroupItem>
      <ToggleGroupItem
        title="Bold"
        value="bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
      >
        <Bold size={20} absoluteStrokeWidth />
      </ToggleGroupItem>
      <ToggleGroupItem
        title="Italic"
        value="italic"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
      >
        <Italic size={20} absoluteStrokeWidth />
      </ToggleGroupItem>
      <ToggleGroupItem
        title="Strike Through"
        value="strike-through"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
      >
        <Strikethrough size={20} absoluteStrokeWidth />
      </ToggleGroupItem>
      <ToggleGroupItem
        title="Paragraph"
        value="paragraph"
        onClick={() => editor.chain().focus().setParagraph().run()}
        disabled={!editor.can().chain().focus().setParagraph().run()}
      >
        <Pilcrow size={20} absoluteStrokeWidth />
      </ToggleGroupItem>
      <ToggleGroupItem
        title="Heading 1"
        value="heading-1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 1 }).run()
        }
      >
        <Heading1 size={20} absoluteStrokeWidth />
      </ToggleGroupItem>
      <ToggleGroupItem
        title="Heading 2"
        value="heading-2"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 size={20} absoluteStrokeWidth />
      </ToggleGroupItem>
      <ToggleGroupItem
        title="Heading 3"
        value="heading-3"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 3 }).run()
        }
      >
        <Heading3 size={20} absoluteStrokeWidth />
      </ToggleGroupItem>
      <ToggleGroupItem
        title="Heading 4"
        value="heading-4"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 4 }).run()
        }
      >
        <Heading4 size={20} absoluteStrokeWidth />
      </ToggleGroupItem>
      <ToggleGroupItem
        title="Heading 5"
        value="heading-5"
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 5 }).run()
        }
      >
        <Heading5 size={20} absoluteStrokeWidth />
      </ToggleGroupItem>
      <ToggleGroupItem
        title="Heading 6"
        value="heading-6"
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 6 }).run()
        }
      >
        <Heading6 size={20} absoluteStrokeWidth />
      </ToggleGroupItem>
      <ToggleGroupItem
        title="Bullet List"
        value="bullet-list"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
      >
        <List />
      </ToggleGroupItem>
      <ToggleGroupItem
        title="Ordered List"
        value="ordered-list"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered />
      </ToggleGroupItem>
      <ToggleGroupItem
        title="Code Block"
        value="code"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
      >
        <Code />
      </ToggleGroupItem>
      <ToggleGroupItem
        title="Blockquote"
        value="blockquote"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        disabled={!editor.can().chain().focus().toggleBlockquote().run()}
      >
        <Quote />
      </ToggleGroupItem>
      {editor.isActive("link") ? (
        <ToggleGroupItem value="unlink" onClick={setUnLink}>
          <Link2Off />
        </ToggleGroupItem>
      ) : (
        <ToggleGroupItem value="setlink" onClick={setLink}>
          <Link2 />
        </ToggleGroupItem>
      )}
    </ToggleGroup>
  );
}
