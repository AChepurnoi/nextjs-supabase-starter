import {createPublicEnvs} from "@/lib/env";
import {cn} from "@/lib/utils";
import {RequiredAuthServerProvider} from "@/context/auth/ServerAuthContext";
import {DesktopSidebar} from "@/components/app/nav/DesktopSidebar";
import {PageTitleSection} from "@/components/app/nav/PageTitleSection";


export default function ApplicationLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <RequiredAuthServerProvider>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <DesktopSidebar/>
                <div className="flex flex-col overflow-y-auto overflow-x-hidden">
                    <PageTitleSection/>
                    {children}
                </div>
            </div>
        </RequiredAuthServerProvider>
    );
}