"use client"
import {usePathname} from "next/navigation";
import {APP_NAVIGATION_LINKS} from "@/lib/const/nav";

export const PathTitle = () => {
    const path = usePathname()
    const link = APP_NAVIGATION_LINKS.find(x => x.href === path)
    return <h1 className="text-lg font-medium md:text-2xl">{link?.label || ""}</h1>

}