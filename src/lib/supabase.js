import { createBrowserClient } from "@supabase/ssr";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabaseClient = null;

export const getSupabaseClient = () => {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error(
      "Supabase env vars are missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
    );
    return null;
  }

  if (supabaseClient) return supabaseClient;

  supabaseClient = createBrowserClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );

  return supabaseClient;
};