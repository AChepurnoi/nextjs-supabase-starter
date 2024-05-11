"use client"
import Link from "next/link";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {ProfileDropdown} from "@/components/app/nav/ProfileDropdown";
import {APP_NAVIGATION_LINKS} from "@/lib/const/nav";


export const DesktopSidebar = () => {
    const path = usePathname()
    return <div className="hidden border-r bg-muted/40 md:block overflow-hidden">
        <div className="flex h-full max-h-screen flex-col gap-2">
            {/*Top Section*/}
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <ProfileDropdown showName/>
            </div>

            {/* Navigation Section*/}
            <div className="flex-1">
                <nav className="grid items-start px-2 text-md font-medium lg:px-4">
                    {APP_NAVIGATION_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}

                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                                link.href === path ? "text-primary" : "")}
                        >
                            <link.icon className="h-4 w-4"/>
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Bottom Section*/}
            <div className="mt-auto p-4">
                <Card x-chunk="dashboard-02-chunk-0">
                    <CardHeader className="p-2 pt-0 md:p-4">
                        <CardTitle>Upgrade to Pro</CardTitle>
                        <CardDescription>
                            Unlock all features and get unlimited access to our support
                            team.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                        <Button size="sm" className="w-full">
                            Upgrade
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
}