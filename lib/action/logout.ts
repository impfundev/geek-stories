"use server";
import { redirect } from "next/navigation";
import { deleteSession } from "../session";

export async function logout() {
  deleteSession();
  redirect("/login");
}
