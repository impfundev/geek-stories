export function TitleInput() {
  return (
    <div className="w-full flex flex-col gap-2 px-10 pt-6 mx-auto">
      <label htmlFor="title" className="text-xs">
        Title:
      </label>
      <input
        name="title"
        id="title"
        placeholder="Title"
        defaultValue="New Post"
        className="bg-background text-foreground focus:outline-none text-3xl md:text-4xl font-semibold"
      />
    </div>
  );
}
