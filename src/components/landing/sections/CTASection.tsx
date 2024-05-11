import {Button} from "@/components/ui/button";
import Link from "next/link";

export type CTASectionProps = {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    id: string
};

export default function CTASection({ title, description, buttonText, buttonLink, id }: CTASectionProps) {
    return (
        <div className="bg-white" id={id}>
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                        {description}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button asChild>
                            <Link href={buttonLink}>{buttonText}</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
