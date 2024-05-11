type FeaturesWithScreenshotProps = {
    imageOnLeft?: boolean;
    features: { name: string; description: string; icon: any }[];
    title: string;
    tagline: string;
    description: string;
    id: string
};


const FeaturesWithScreenshot = ({ imageOnLeft, features, title, description, tagline, id }: FeaturesWithScreenshotProps) => {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32" id={id}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-primary">{tagline}</p>
                            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                {description}
                            </p>
                            <dl className="mt-6 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-primary"
                                                          aria-hidden="true"/>
                                            {feature.name}
                                        </dt>
                                        {' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className={imageOnLeft ? "flex items-start justify-end lg:order-first" : ""}>
                        <img
                            src="https://placehold.co/1200x800"
                            alt="Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            width={1200}
                            height={800}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesWithScreenshot;

