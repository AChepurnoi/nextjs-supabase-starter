import * as React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export type FaqType = {
    question: string;
    answer: string;
};

export type FAQSectionProps = {
    faqs: FaqType[];
    id: string
};

export default function FAQSection({faqs, id}: FAQSectionProps) {
    return (
        <div className="bg-white" id={id}>
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-7xl divide-y divide-gray-900/10">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                        Frequently asked questions
                    </h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index + 1}`}>
                                    <AccordionTrigger className="pt-6">
                    <span className="text-base font-semibold leading-7 text-start">
                      {faq.question}
                    </span>
                                    </AccordionTrigger>
                                    <AccordionContent  className="mt-2 pr-12">
                                        <p className="text-base leading-7 text-gray-600">
                                            {faq.answer}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </dl>
                </div>
            </div>
        </div>
    );
}
