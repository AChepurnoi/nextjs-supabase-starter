"use client"
import type {GAParams} from "@/components/shared/google-analytics/types";
import {cookieConsentGiven} from "@/components/shared/cookies/types";
import Script from "next/script";
import React from "react";

declare global {
    interface Window {
        dataLayer?: Object[]
    }
}

export let currDataLayerName: string | undefined = undefined

export function GoogleAnalyticsProvider(props: GAParams) {
    const {gaId, dataLayerName = 'dataLayer'} = props
    if (currDataLayerName === undefined) {
        currDataLayerName = dataLayerName
    }

    const consent = cookieConsentGiven()
    const mode = consent === "yes" ? "granted" : "denied"

    console.log("[GA]:", mode)
    return (
        <>
            <Script
                id="_next-ga-init"
                dangerouslySetInnerHTML={
                    {
                        __html: `
          window['${dataLayerName}'] = window['${dataLayerName}'] || [];
          function gtag(){window['${dataLayerName}'].push(arguments);}
          gtag('consent', 'default', {
            'ad_storage': '${mode}',
            'ad_user_data': '${mode}',
            'ad_personalization': '${mode}',
            'analytics_storage': '${mode}'
          });
          gtag('js', new Date());
          gtag('config', '${gaId}');
          
          `,
                    }}
            />
            <Script
                id="_next-ga"
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
        </>
    )
}