import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function GenericErrorHandler({error, reset}: {
    error: Error & { digest?: string },
    reset: () => void
}) {
    return (
        <>
            <main className="grid min-h-100vh place-items-center bg-white px-6 py-24 sm:py-28 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-primary">500</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Error happened</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t process this request. Issue
                        has been reported.</p>

                    <p className="my-6 text-base leading-7 text-red-500 bg-gray-50 rounded py-2 px-2">{error.message}</p>

                    <div className={"my-4"}>
                        <Button onClick={reset}>
                            Reload the page
                        </Button>
                    </div>

                    <div className="flex items-center justify-center gap-x-6">
                        <Button asChild variant={"ghost"}>
                            <Link href={"/"}>Go back home</Link>
                        </Button>

                        <a href="#" className="text-sm font-semibold text-gray-900">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}
