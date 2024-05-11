"use client"

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {useEffect, useState} from "react";
import Link from "next/link";
import {ROUTES} from "@/lib/const/routes";
import {Button} from "@/components/ui/button";
import {cookieConsentGiven, CookieConsentValues, setCookieConsentGiven} from "@/components/shared/cookies/types";
import {updateGAConsent} from "@/components/shared/google-analytics/ga";
import {updatePHConsent} from "@/components/shared/posthog/posthog";

export const CookieConsent = () => {
    const [consentGiven, setConsentGiven] = useState<CookieConsentValues>('');
    useEffect(() => {
        // We want this to only run once the client loads
        // or else it causes a hydration error
        setConsentGiven(cookieConsentGiven());
    }, []);

    useEffect(() => {
        if (consentGiven !== '') {
            updateGAConsent(consentGiven)
            updatePHConsent(consentGiven)
        }
    }, [consentGiven]);

    const handleAcceptCookies = () => {
        setCookieConsentGiven('yes')
        setConsentGiven('yes');
    };
    const handleDeclineCookies = () => {
        setCookieConsentGiven('no')
        setConsentGiven('no');
    };

    return (<>
        {consentGiven === "undecided" &&
            <Card className={"fixed bottom-4 right-4 m-4 p-4 max-w-xl text-xs sm:text-sm flex"}>
                <div className={"w-3/4 pr-4"}>
                    <div>
                        This website utilizes technologies such as cookies to enable essential site functionality, as
                        well
                        as for analytics.
                        You can opt-in or opt-out at any time.
                    </div>
                    <div className={"mt-2"}>
                        <Link href={ROUTES.PRIVACY_POLICY}>Privacy Policy</Link>

                    </div>
                </div>
                <div className={"flex flex-col space-y-2 w-1/4"}>
                    <Button size={"sm"} variant={"default"} onClick={handleAcceptCookies}
                            className={"text-xs sm:text-sm"}>Accept all</Button>
                    <Button size={"sm"} variant={"ghost"} onClick={handleDeclineCookies}
                            className={"text-xs sm:text-sm"}>Deny</Button>
                </div>
            </Card>
        }
    </>)
}