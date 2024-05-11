import {ChevronRightIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";

export interface HeroProps {
    id: string
    title: string;
    description: string;
    buttonLabel: string;
    buttonUrl: string;
    imageUrl: string | undefined | null;
    imageAlt: string | undefined | null;
}

const GridPattern = () => {
    return <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
    >
        <defs>
            <pattern
                id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
            >
                <path d="M.5 200V.5H200" fill="none"/>
            </pattern>
        </defs>
        <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
    </svg>
}

export const Hero = ({
                         id,
                         title,
                         description,
                         buttonLabel,
                         buttonUrl,
                         imageUrl,
                         imageAlt,
                     }: HeroProps) => {
    return (
        <div className="relative isolate overflow-hidden bg-background text-foreground" id={id}>
            <GridPattern/>
            <div className={
                cn("mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40")}>
                <div
                    className={cn("mx-auto max-w-2xl lg:pt-8", imageUrl && "lg:mx-0 lg:max-w-xl lg:flex-shrink-0", !imageUrl && "text-center")}>
                    <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
                        {title}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        {description}
                    </p>
                    <div className={cn("mt-10 flex items-center gap-x-6", !imageUrl && "justify-center")}>
                        <Button asChild>
                            <Link href={buttonUrl} target="_blank">{buttonLabel}</Link>
                        </Button>

                        <a
                            href="#"
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Learn more{" "}
                            <span aria-hidden="true">
                                <ChevronRightIcon className="inline-block w-4 h-4"/>
                            </span>
                        </a>
                    </div>
                </div>

                {imageUrl && <div
                    className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <div
                            className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                            <img
                                src={imageUrl}
                                alt={imageAlt ?? "Image"}
                                width={600}
                                height={400}
                                className="w-[50rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                            />
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    );
};
