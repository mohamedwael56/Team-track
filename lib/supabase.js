import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Guard creation: only create client in browser and only when env vars exist.
let supabaseClient = null;
if (typeof window !== 'undefined') {
    if (SUPABASE_URL && SUPABASE_KEY) {
        supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
    } else {
        console.error(
            'Supabase client not created: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY is missing.'
        );
    }
}

export const supabase = supabaseClient;

export const getSupabaseClient = () => {
    if (typeof window === 'undefined') return null;
    if (!SUPABASE_URL || !SUPABASE_KEY) {
        console.error('Supabase env vars are missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.');
        return null;
    }
    if (supabase) return supabase;
    supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    return supabase;
};