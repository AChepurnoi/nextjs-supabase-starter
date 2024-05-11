import Link from 'next/link'
import {PAGE_DATA} from "@/page-data/landing";
import Navbar from "@/components/landing/sections/Navbar";
import Footer from "@/components/landing/sections/Footer";
import NotFoundPlaceholder from "@/components/shared/NotFoundPlaceholder";

export default function NotFound() {
    return (
        <>
            <Navbar title={PAGE_DATA.navigation.title}
                    menuOptions={PAGE_DATA.navigation.links}
                    buttonLabel={PAGE_DATA.navigation.buttonLabel}
                    buttonUrl={PAGE_DATA.navigation.buttonUrl}
            />
            <NotFoundPlaceholder/>
            <Footer navigation={PAGE_DATA.footer}/>

        </>
    )
}