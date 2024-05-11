import { createBrowserClient, createServerClient, type CookieOptions } from "@supabase/ssr";

export const createSupabaseClient = () =>
    createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );

