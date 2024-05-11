import {Hero} from "@/components/landing/sections/Hero";
import {Navbar, RouteProps} from "@/components/landing/sections/Navbar";
import FAQSection from "@/components/landing/sections/FAQSection";
import Footer, {FooterProps} from "@/components/landing/sections/Footer";
import CTASection from "@/components/landing/sections/CTASection";
import {FeaturesGrid} from "@/components/landing/sections/features/FeaturesGrid";
import PricingSection from "@/components/landing/sections/PricingCards";
import {Testimonial} from "@/components/landing/sections/Testimonial";
import FeaturesColumns from "@/components/landing/sections/features/FeaturesColumns";
import FeaturesWithScreenshot from "@/components/landing/sections/features/FeaturesWithScreenshot";
import type {Metadata} from "next";
import {PAGE_DATA} from "@/page-data/landing";
import {META} from "@/lib/const/meta";
import {CookieConsent} from "@/components/shared/cookies/CookieConsent";

export const metadata: Metadata = {
    title: META.GENERIC_TITLE,
    description: META.GENERIC_DESCRIPTION,

};

export default function Home() {

    return (
        <>
            <Navbar title={PAGE_DATA.navigation.title}
                    menuOptions={PAGE_DATA.navigation.links}
                    buttonLabel={PAGE_DATA.navigation.buttonLabel}
                    buttonUrl={PAGE_DATA.navigation.buttonUrl}
            />

            <Hero
                id={PAGE_DATA.hero.id}
                title={PAGE_DATA.hero.title}
                description={PAGE_DATA.hero.description}
                buttonUrl={PAGE_DATA.hero.btnUrl}
                buttonLabel={PAGE_DATA.hero.btnLabel}
                imageUrl={PAGE_DATA.hero.imageUrl}
                imageAlt={PAGE_DATA.hero.imageAlt}
            />
            <FeaturesColumns
                id={PAGE_DATA.featuresOne.id}
                features={PAGE_DATA.featuresOne.features}
                title={PAGE_DATA.featuresOne.title}
            />

            <FeaturesWithScreenshot
                id={PAGE_DATA.featuresTwo.id}
                title={PAGE_DATA.featuresTwo.title}
                tagline={PAGE_DATA.featuresTwo.tagline}
                description={PAGE_DATA.featuresTwo.description}
                features={PAGE_DATA.featuresTwo.features}
                imageOnLeft={true}
            />

            <FeaturesGrid
                id={PAGE_DATA.featuresThree.id}

                title={PAGE_DATA.featuresThree.title}
                tagline={PAGE_DATA.featuresThree.tagline}
                description={PAGE_DATA.featuresThree.description}
                features={PAGE_DATA.featuresThree.features}
            />

            <CTASection
                id={PAGE_DATA.cta.id}

                title={PAGE_DATA.cta.title}
                description={PAGE_DATA.cta.description}
                buttonText={PAGE_DATA.cta.btnText}
                buttonLink={PAGE_DATA.cta.btnLink}
            />

            <Testimonial
                id={PAGE_DATA.testimonials.id}
                stars={PAGE_DATA.testimonials.stars}
                quote={PAGE_DATA.testimonials.quote}
                author={PAGE_DATA.testimonials.author}
                role={PAGE_DATA.testimonials.role}
                avatarSrc={PAGE_DATA.testimonials.avatarSrc}
            />

            <PricingSection
                id={PAGE_DATA.pricing.id}
                title={PAGE_DATA.pricing.title}
                headline={PAGE_DATA.pricing.headline}
                description={PAGE_DATA.pricing.description}
                frequencies={PAGE_DATA.pricing.frequencies}
                tiers={PAGE_DATA.pricing.tiers}


            />

            <FAQSection
                id={PAGE_DATA.faq.id}
                faqs={PAGE_DATA.faq.data}
            />
            <Footer navigation={PAGE_DATA.footer}/>

        </>
    );
}
