"use client"
import {Button} from "@/components/ui/button";

export const StubContent = () => {
    return <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center"></div>
        <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
            x-chunk="dashboard-02-chunk-1"
        >
            <div className="flex flex-col items-center gap-1 text-center">
                <h3 className="text-2xl font-bold tracking-tight">
                    You have no content
                </h3>
                <p className="text-sm text-muted-foreground">
                    You can start by clicking here.
                </p>
                <Button className="mt-4">Start now</Button>
                <Button className="mt-4" variant={"outline"} onClick={() => {
                    throw new Error('Test Error')
                }}>Throw error</Button>

            </div>
        </div>
    </main>
}