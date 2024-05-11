import {Component1Icon} from "@radix-ui/react-icons";
import {ROUTES} from "@/lib/const/routes";

export const PAGE_DATA = {
    navigation: {
        title: "Next.js Starter",
        buttonLabel: "Get Started",
        buttonUrl: ROUTES.APP_HOME,
        links: [
            {
                href: "/#how-to-start",
                label: "How To Start",
            },
            {
                href: "/#features-two",
                label: "Features",
            },
            {
                href: "/#pricing",
                label: "Pricing",
            },
            {
                href: "/#faq",
                label: "FAQ",
            },
        ],
    },
    hero: {
        id: "hero",
        title: "Next.js Starter Template",
        description: "Explore the power of Next.js and Supabase combined in a starter template designed to enhance your project's speed and efficiency.",
        btnLabel: "Get Started Now",
        btnUrl: ROUTES.APP_HOME,
        imageUrl: "https://placehold.co/1200x800",
        imageAlt: "image"
    },
    featuresOne: {
        id: "how-to-start",
        title: "How to start",
        features: [
            {
                name: 'Clone the Repository',
                description: 'Start by cloning the Next.js Supabase Starter repository to your local environment.',
                href: '#',
                icon: Component1Icon,
            },
            {
                name: 'Customize Your Template',
                description: 'Edit the template to suit your project needs. Modify the landing page, user authentication features, and blog starter components as required.',
                href: '#',
                icon: Component1Icon,
            },
            {
                name: 'Deploy Your App',
                description: 'Deploy the customized template to your preferred hosting platform to make it accessible to users.',
                href: '#',
                icon: Component1Icon,
            },
        ]
    },
    featuresTwo: {
        id: "features-one",
        title: "Prebuilt components",
        tagline: "Ship faster with",
        description: "Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.",
        features: [
            {
                name: 'Landing page',
                description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
                icon: Component1Icon,
            },
            {
                name: 'Login & Signup',
                description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
                icon: Component1Icon,
            },
            {
                name: 'User Profile',
                description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
                icon: Component1Icon,
            },
        ]
    },
    featuresThree: {
        id: "features-two",
        title: "Build on top of existing features",
        tagline: "More features",
        description: "Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.",

        features: [
            {
                name: 'Supabase Integration',
                description:
                    'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
                icon: Component1Icon,
            },
            {
                name: 'Markdown Blog',
                description:
                    'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
                icon: Component1Icon,
            },
            {
                name: 'Google Analytics',
                description:
                    'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
                icon: Component1Icon,
            },
            {
                name: 'Dockerfile',
                description:
                    'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
                icon: Component1Icon,
            },
        ]
    },
    cta: {
        id: "cta",
        title: "Clone repository and start now",
        description: "Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.",
        btnText: "Get Started Now",
        btnLink: "#"
    },
    testimonials: {
        id: "testimonial",
        stars: 5,
        quote: "Best template I ever used (unbiased opinion).",
        author: "Me",
        role: "Creator of the template",
        avatarSrc: "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352156-stock-illustration-default-placeholder-profile-icon.jpg"
    },
    pricing: {
        id: "pricing",
        title: "Pricing plans for teams of all sizes",
        headline: "Pricing",
        description: "Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.",
        frequencies: [
            {value: 'monthly', label: 'Monthly', priceSuffix: '/month'},
            {value: 'annually', label: 'Annually', priceSuffix: '/year'},
        ],
        tiers: [
            {
                name: 'Freelancer',
                id: 'tier-freelancer',
                href: '#',
                price: {monthly: '$15', annually: '$144'},
                description: 'The essentials to provide your best work for clients.',
                features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
                mostPopular: false,
            },
            {
                name: 'Startup',
                id: 'tier-startup',
                href: '#',
                price: {monthly: '$30', annually: '$288'},
                description: 'A plan that scales with your rapidly growing business.',
                features: [
                    '25 products',
                    'Up to 10,000 subscribers',
                    'Advanced analytics',
                    '24-hour support response time',
                    'Marketing automations',
                ],
                mostPopular: true,
            }
        ]
    },
    faq: {
        id: "faq",
        data: [
            {
                question: "What's the best thing about Switzerland?",
                answer:
                    "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
            },
            {
                question: "How do I reset my password?",
                answer:
                    "You can reset your password by going to the login page and clicking on the 'Forgot Password' link. Follow the instructions to reset your password.",
            },
            {
                question: "What payment methods do you accept?",
                answer:
                    "We accept payments via credit/debit cards, PayPal, and bank transfers. Choose the method that suits you best during checkout.",
            },
            {
                question: "Can I cancel my subscription anytime?",
                answer:
                    "Yes, you can cancel your subscription anytime. Simply go to your account settings and follow the steps to cancel your subscription.",
            },
            {
                question: "Is there a free trial available?",
                answer:
                    "Yes, we offer a free trial period for new users. Sign up now to start your free trial and experience our platform.",
            },
            {
                question: "How can I contact customer support?",
                answer:
                    "You can contact our customer support team via email, phone, or live chat. Visit our support page for more information.",
            },
            {
                question: "Do you offer refunds?",
                answer:
                    "We have a refund policy in place. Contact our support team for assistance with refunds and cancellations.",
            },
            {
                question: "Are there any discounts available for long-term subscriptions?",
                answer:
                    "Yes, we offer discounts for long-term subscriptions. Check our pricing page for details on available discounts.",
            },
            {
                question: "Can I upgrade my plan later?",
                answer:
                    "Yes, you can upgrade your plan at any time. Simply log in to your account and choose the plan you want to upgrade to.",
            },
            {
                question: "Is my data secure with your platform?",
                answer:
                    "We take security seriously and use industry-standard encryption to protect your data. Your privacy and security are our top priorities.",
            },
        ],
    },
    footer: {
        footerText: "2024 Your Company, Inc. All rights reserved.",
        main: [
            {label: 'About', href: '#'},
            {label: 'Blog', href: '#'},
            {label: 'Features', href: '#'},
            {label: 'Pricing', href: '#'},
            {label: 'API', href: '#'},
            {label: 'Legal', href: '#'},
        ],
        social: [
            {
                label: 'Facebook',
                href: '#',
                icon: (props: any) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
            {
                label: 'Instagram',
                href: '#',
                icon: (props: any) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
            {
                label: 'X',
                href: '#',
                icon: (props: any) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/>
                    </svg>
                ),
            },
            {
                label: 'GitHub',
                href: '#',
                icon: (props: any) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
            {
                label: 'YouTube',
                href: '#',
                icon: (props: any) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
        ],
    }
}