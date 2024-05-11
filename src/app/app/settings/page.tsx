import type {Metadata} from "next";
import {META} from "@/lib/const/meta";
import {StubContent} from "@/components/app/StubContent";

export const metadata: Metadata = {
    title: META.createPageTitle("Settings"),
    description: META.GENERIC_DESCRIPTION,
};

export default function Page() {
    return <StubContent/>
}
