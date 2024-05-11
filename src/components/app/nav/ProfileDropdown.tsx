"use client"
import Link from "next/link";
import {ROUTES} from "@/lib/const/routes";
import {cn} from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {CircleUser} from "lucide-react";
import {createSupabaseClient} from "@/lib/supabase/client";
import {useRouter} from "next/navigation";
import {useAuthContext} from "@/context/auth/useAuthContext";


export const ProfileDropdown = ({showName, className}: any) => {

    const client = createSupabaseClient()
    const router = useRouter()
    const logOut = () => {
        client.auth.signOut()
            .finally(() => {
                router.push(ROUTES.MAGIC_LINK_LOGIN)
            })
    }
    const auth = useAuthContext()

    return <Link href={ROUTES.APP_HOME}
                 className={cn("flex items-center gap-2 font-medium text-sm lg:text-md", className)}>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className={"flex space-x-2 items-center max-w-full"}>
                    <Button variant="secondary" size="icon" className="rounded-full h-6 w-6">
                        <CircleUser className="h-5 w-5"/>
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                    {showName && <div className="truncate">{auth?.user?.email}</div>}
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className={""}>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem asChild><Link href={ROUTES.APP_PROFILE_SETTINGS}>Settings</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href={ROUTES.APP_BILLING}>Billing</Link></DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem onClick={logOut}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </Link>
}
