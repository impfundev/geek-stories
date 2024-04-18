import { createBrowserClient } from "@supabase/ssr";
import { authConfig } from "../config";

export function createClient() {
  return createBrowserClient(authConfig.PROJECT_URL, authConfig.ANON_KEY);
}
