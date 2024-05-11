'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import {cookieConsentGiven} from "@/components/shared/cookies/types";
import {createPublicEnvs} from "@/lib/env";
import React from "react";

export function PosthogProvider({ children }: {children: React.ReactNode}) {
    const env = createPublicEnvs()
    const consent = cookieConsentGiven()
    console.log("[PH]:", consent)
    if (typeof window !== 'undefined') {
        posthog.init(env.POSTHOG_KEY, {
            api_host: env.POSTHOG_HOST,
            persistence: consent === 'yes' ? 'localStorage+cookie' : 'memory'

        })
    }

    return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}