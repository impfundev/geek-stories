"use client";

import { useState } from "react";
import { Trash } from "lucide-react";
import { deleteMedia } from "@/lib/action/deleteMedia";
import { SubmitButton } from "../../auth/SubmitButton";
import { Media } from "@/lib/type";
import Image from "next/image";

export function MediaView({ media }: { media: Media }) {
  const [showAction, setShowAction] = useState(false);

  return (
    <div
      className="relative w-full max-w-sm my-4 rounded-xl border drop-shadow-lg overflow-hidden"
      onMouseEnter={() => {
        setShowAction(true);
      }}
      onMouseLeave={() => {
        setShowAction(false);
      }}
    >
      <Image
        alt="Media"
        className="w-full max-w-sm h-full object-cover"
        src={media.url}
        width={480}
        height={360}
        loading="lazy"
      />
      <form
        action={deleteMedia}
        className={`${
          showAction ? "scale-100" : "scale-0"
        } absolute top-4 right-4 transition-all`}
      >
        <input
          id="mediaUrl"
          name="mediaUrl"
          hidden
          readOnly
          value={media.url}
        />
        <SubmitButton className="h-8 w-8 p-0">
          <Trash className="w-4 h-4" />
        </SubmitButton>
      </form>
    </div>
  );
}
