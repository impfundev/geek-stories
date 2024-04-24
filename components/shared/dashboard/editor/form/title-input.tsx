import type { TitleInput } from "@/lib/type";

export function TitleInput({ title, register }: TitleInput) {
  return (
    <div className="w-full flex flex-col gap-2 px-10 pt-6 mx-auto">
      <label htmlFor="title" className="text-xs">
        Title:
      </label>
      <input
        placeholder="Title"
        defaultValue={title}
        {...register("title")}
        className="bg-background text-foreground focus:outline-none text-3xl md:text-4xl font-semibold"
      />
    </div>
  );
}
