export type PublicEnv = {
    SUPABASE_URL: string
    SUPABASE_ANON_KEY: string
    PUBLIC_URL: string
    GA_ID: string
    POSTHOG_HOST: string
    POSTHOG_KEY: string
}

export const createPublicEnvs = (): PublicEnv => {
    return {
        SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL!,
        SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        PUBLIC_URL: process.env.NEXT_PUBLIC_PUBLIC_URL!,
        GA_ID: process.env.NEXT_PUBLIC_GA_ID!,
        POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
        POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY!
    }
}