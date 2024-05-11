'use client' // Error components must be Client Components
import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react'
import Navbar from "@/components/landing/sections/Navbar";
import {PAGE_DATA} from "@/page-data/landing";
import Footer from "@/components/landing/sections/Footer";
import GenericErrorHandler from "@/components/shared/error/GenericErrorHandler";

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        Sentry.captureException(error);
        console.error(error)
    }, [error])


    return (
        <>
            <Navbar title={PAGE_DATA.navigation.title}
                    menuOptions={PAGE_DATA.navigation.links}
                    buttonLabel={PAGE_DATA.navigation.buttonLabel}
                    buttonUrl={PAGE_DATA.navigation.buttonUrl}
            />
            <GenericErrorHandler error={error} reset={reset}/>
            <Footer navigation={PAGE_DATA.footer}/>

        </>
    )
}