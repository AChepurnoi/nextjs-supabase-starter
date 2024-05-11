'use client' // Error components must be Client Components
import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react'
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
            <GenericErrorHandler error={error} reset={reset}/>
        </>
    )
}