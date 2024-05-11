"use client"
import * as React from 'react';
import {useState} from 'react';
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group';
import {CheckIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";
import {classNames} from "@/lib/utils";

export type FrequencyType = {
    value: "monthly" | "annually" | string;
    label: string;
    priceSuffix: string;
};

export type TierType = {
    name: string;
    id: string;
    href: string;
    price: { [key: string]: string };
    description: string;
    features: string[];
    mostPopular: boolean;
};

export type PricingSectionProps = {
    frequencies: FrequencyType[];
    tiers: TierType[];
    title: string
    headline: string
    description: string
    id: string
};

export default function PricingSection({tiers, frequencies, title, headline, description, id}: PricingSectionProps) {
    const [selectedFrequency, setSelectedFrequency] = useState(frequencies[0]);

    return (
        <div className="bg-white py-24 sm:py-32" id={id}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">{headline}</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                        {title}
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
                    {description}
                </p>
                <div className="mt-16 flex justify-center text-sm font-medium">
                    <div className={"flex border rounded-full p-1"}>
                        {frequencies.map((option) => (
                            <div
                                key={option.value}
                                className={classNames(
                                    'cursor-pointer rounded-full px-3 py-1.5',
                                    selectedFrequency.value === option.value ? 'bg-primary text-secondary' : 'text-gray-500',
                                )}
                                onClick={() => setSelectedFrequency(option)}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>

                </div>
                <div
                    className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.mostPopular ? 'ring-2 ring-primary' : 'ring-1 ring-gray-200',
                                'rounded-3xl p-8 xl:p-10',
                                "max-w-lg"
                            )}
                        >
                            <div className="flex items-center justify-between gap-x-4">
                                <h3
                                    id={tier.id}
                                    className={classNames(
                                        tier.mostPopular ? 'text-primary' : 'text-foreground',
                                        'text-lg font-semibold leading-8'
                                    )}
                                >
                                    {tier.name}
                                </h3>
                                {tier.mostPopular ? (
                                    <p className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary">
                                        Most popular
                                    </p>
                                ) : null}
                            </div>
                            <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span
                                    className="text-4xl font-bold tracking-tight text-gray-900">{tier.price[selectedFrequency.value] ?? "N/A"}</span>
                                <span
                                    className="text-sm font-semibold leading-6 text-gray-600">{selectedFrequency.priceSuffix}</span>
                            </p>
                            <Button className={classNames("block w-full", "mt-6",)}
                                    variant={tier.mostPopular ? "default" : "outline"}>
                                Buy plan
                            </Button>

                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-primary" aria-hidden="true"/>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}