type NavigationItem = {
    label: string;
    href: string;
}

type SocialItem = NavigationItem & {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export type FooterProps = {
    navigation: {
        footerText: string
        main: NavigationItem[];
        social: SocialItem[];
    },
}

export default function Footer({navigation}: FooterProps) {
    return (
        <footer className="bg-background">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.label} className="pb-6">
                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                {item.label}
                            </a>
                        </div>
                    ))}
                </nav>
                <div className="mt-10 flex justify-center space-x-10">
                    {navigation.social.map((item) => (
                        <a key={item.label} href={item.href} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">{item.label}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                    {navigation.footerText}
                </p>
            </div>
        </footer>
    )
}
