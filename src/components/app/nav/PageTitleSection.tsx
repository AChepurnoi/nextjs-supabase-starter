import {MobileSidebar} from "@/components/app/nav/MobileSidebar";
import {PathTitle} from "@/components/app/nav/PathTitle";
import {ProfileDropdown} from "@/components/app/nav/ProfileDropdown";


export const PageTitleSection = () => {
    return <header className="flex min-h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <MobileSidebar/>
        <div className="w-full flex-1">
            <PathTitle/>
        </div>
        <ProfileDropdown className="md:hidden" showName={false}/>
    </header>
}