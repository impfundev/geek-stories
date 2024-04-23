"use client";

export function DateInput({ createAt }: { createAt: Date }) {
  const recentDate = new Date();
  return (
    <>
      <input
        id="updateAt"
        name="createAt"
        value={JSON.stringify(createAt)}
        readOnly
        hidden
      />
      <input
        id="updateAt"
        name="updateAt"
        value={JSON.stringify(recentDate)}
        readOnly
        hidden
      />
    </>
  );
}
