import { UseFormRegister } from "react-hook-form";
import type { Posts } from "@prisma/client";

type FeaturedInput = {
  value: {
    src: string;
    width: string;
    height: string;
    alt: string;
  };
  register: UseFormRegister<Posts>;
};

export function InputFeatured({ register, value }: FeaturedInput) {
  return (
    <>
      <input
        value={value.src}
        className="hidden"
        {...register("thumbnail_url")}
        readOnly
      />
      <input
        value={value.alt}
        {...register("thumbnail_alt")}
        className="hidden"
        readOnly
      />
      <input
        value={value.width}
        {...register("thumbnail_width")}
        className="hidden"
        readOnly
      />
      <input
        value={value.height}
        {...register("thumbnail_height")}
        className="hidden"
        readOnly
      />
    </>
  );
}
