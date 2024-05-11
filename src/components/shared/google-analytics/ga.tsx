'use client'
// TODO: Evaluate import 'client only'
import React, {useEffect} from 'react'
import Script from 'next/script'

import type {GAParams} from './types'
import {cookieConsentGiven, CookieConsentValues} from "@/components/shared/cookies/types";
import {currDataLayerName} from "@/components/shared/google-analytics/GoogleAnalyticsProvider";


export function sendGAEvent(..._args: Object[]) {
    if (currDataLayerName === undefined) {
        console.warn(`next: GA has not been initialized`)
        return
    }

    if (window[currDataLayerName]) {
        window[currDataLayerName].push(arguments)
    } else {
        console.warn(
            `next: GA dataLayer ${currDataLayerName} does not exist`
        )
    }
}

export function updateGAConsent(consent: CookieConsentValues) {
    try {
        console.log("Updating consent:", consent)
        if (consent === "yes") {
            window.gtag("consent", 'update', {
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
            });
        }
        if (consent === "no") {
            window.gtag("consent", 'update', {
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'ad_storage': 'denied',
                'analytics_storage': 'denied'
            });
        }
    } catch (e) {
        console.error("Error updating consent", e)
    }
}