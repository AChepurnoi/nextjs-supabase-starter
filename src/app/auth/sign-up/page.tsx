import {Navbar, RouteProps} from "@/components/landing/sections/Navbar";
import type {Metadata} from "next";
import {PAGE_DATA} from "@/page-data/landing";
import {MagicLinkLogin} from "@/components/auth/views/magic-link-login";
import {PasswordSignup} from "@/components/auth/views/password-signup";
import {OptionalAuthServerProvider} from "@/context/auth/ServerAuthContext";
import {META} from "@/lib/const/meta";

export const metadata: Metadata = {
    title: META.createPageTitle("Sign up"),
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
                <PasswordSignup/>
            </OptionalAuthServerProvider>
        </>
    );
}
