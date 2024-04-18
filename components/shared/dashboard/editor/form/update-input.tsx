"use client";

export function UpdateInput() {
  const date = new Date();
  const now = date.toISOString();
  return <input id="updateAt" name="updateAt" value={now} readOnly hidden />;
}
