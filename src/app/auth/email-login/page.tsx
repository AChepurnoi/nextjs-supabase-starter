import {Navbar, RouteProps} from "@/components/landing/sections/Navbar";
import Footer, {FooterProps} from "@/components/landing/sections/Footer";
import type {Metadata} from "next";
import {PAGE_DATA} from "@/page-data/landing";
import {MagicLinkLogin} from "@/components/auth/views/magic-link-login";
import {ClientAuthContextProvider} from "@/context/auth/ClientAuthContext";
import {OptionalAuthServerProvider} from "@/context/auth/ServerAuthContext";
import {META} from "@/lib/const/meta";

export const metadata: Metadata = {
    title: META.createPageTitle("Sign in"),
    description: META.GENERIC_DESCRIPTION,
};

export default function Page() {

    return (
        <>
            <Navbar title={PAGE_DATA.navigation.title}
                    menuOptions={PAGE_DATA.navigation.links}
                    buttonLabel={PAGE_DATA.navigation.buttonLabel}
                    buttonUrl={PAGE_DATA.navigation.buttonUrl}
            />
            <OptionalAuthServerProvider enableHomeRedirect>
                <MagicLinkLogin/>
            </OptionalAuthServerProvider>
        </>
    );
}
