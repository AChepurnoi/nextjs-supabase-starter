import {StarFilledIcon} from "@radix-ui/react-icons";

export type TestimonialProps = {
    id: string
    stars: number;
    quote: string;
    author: string;
    role: string;
    avatarSrc: string;
};

export const Testimonial = ({ stars, quote, author, role, avatarSrc, id }: TestimonialProps) => {
    return (
        <section className="bg-white px-6 py-24 sm:py-32 lg:px-8 text-foreground" id={id}>
            <figure className="mx-auto max-w-2xl">
                <p className="sr-only">{stars} out of 5 stars</p>
                <div className="flex gap-x-1 text-green-600">
                    {[...Array(stars)].map((_, index) => (
                        <StarFilledIcon key={index} className="h-5 w-5 flex-none" aria-hidden="true" />
                    ))}
                </div>
                <blockquote className="mt-10 text-xl font-semibold leading-8 tracking-tight sm:text-2xl sm:leading-9">
                    <p>{quote}</p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                    <img className="h-12 w-12 rounded-full bg-gray-50" src={avatarSrc} alt={author} />
                    <div className="text-sm leading-6">
                        <div className="font-semibold">{author}</div>
                        <div className="mt-0.5 text-gray-600">{role}</div>
                    </div>
                </figcaption>
            </figure>
        </section>
    );
};