import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { UploadImage } from "@/components/shared/dashboard/editor/form/upload-image";

const AddImage = Node.create({
  name: "AddImage",
  group: "block",
  atom: true,
  parseHTML() {
    return [
      {
        tag: "img",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["img", mergeAttributes(HTMLAttributes)];
  },
  addNodeView() {
    return ReactNodeViewRenderer(UploadImage);
  },
});

export default AddImage;
