"use client";

import { useState } from "react";
import { Trash } from "lucide-react";
import { deleteMedia } from "@/lib/action/deleteMedia";
import { SubmitButton } from "../../auth/SubmitButton";
import { Media } from "@/lib/type";

export function MediaView({ media }: { media: Media }) {
  const [showAction, setShowAction] = useState(false);

  return (
    <li
      className="relative w-full max-w-sm my-4 rounded-xl border drop-shadow-lg overflow-hidden"
      onMouseEnter={() => {
        setShowAction(true);
      }}
      onMouseLeave={() => {
        setShowAction(false);
      }}
    >
      <img
        className="w-full max-w-sm h-full"
        src={media.url}
        width={media.metadata.width}
        height={media.metadata.height}
        loading="lazy"
      />
      <form
        action={deleteMedia}
        className={`${
          showAction ? "scale-100" : "scale-0"
        } absolute top-4 right-4 transition-all`}
      >
        <input
          id="mediaPath"
          name="mediaPath"
          hidden
          readOnly
          value={media.path}
        />
        <SubmitButton className="h-8 w-8 p-0">
          <Trash className="w-4 h-4" />
        </SubmitButton>
      </form>
    </li>
  );
}
