import {Inter} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import {createPublicEnvs} from "@/lib/env";
import {Toaster} from "@/components/ui/toaster";
import {CookieConsent} from "@/components/shared/cookies/CookieConsent";
import {GoogleAnalyticsProvider} from "@/components/shared/google-analytics/GoogleAnalyticsProvider";
import {PosthogProvider} from "@/components/shared/posthog/PosthogProvider";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    const env = createPublicEnvs()

    return (
        <html lang="en">
        <GoogleAnalyticsProvider gaId={env.GA_ID}/>
        <PosthogProvider>
            <body className={cn(inter.className)}>
            <main>{children}</main>
            <CookieConsent/>
            <Toaster/>
            </body>
        </PosthogProvider>

        </html>
    );
}
