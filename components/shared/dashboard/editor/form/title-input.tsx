import type { TitleInput } from "@/lib/type";

export function TitleInput({ title, register }: TitleInput) {
  return (
    <div className="w-full flex flex-col gap-2 px-10 pt-6 mx-auto">
      <label htmlFor="title">Title: Maximum 85 character</label>
      <input
        placeholder="Add Title"
        defaultValue={title}
        {...register("title")}
        className="bg-background text-foreground border-none focus:border-none focus:outline-none text-3xl md:text-4xl lg:text-5xl font-semibold"
        maxLength={85}
      />
    </div>
  );
}
