import { createClient } from "@supabase/supabase-js";

// Only create the Supabase client in the browser/runtime where `window` is defined.
// This prevents bundlers / server-side builds from executing browser-only
// initialization which can cause build-time errors.
export const supabase =
    typeof window !== 'undefined'
        ? createClient(
                process.env.NEXT_PUBLIC_SUPABASE_URL,
                process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
            )
        : null;

export const getSupabaseClient = () => {
    if (typeof window === 'undefined') return null;
    if (supabase) return supabase;
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
};