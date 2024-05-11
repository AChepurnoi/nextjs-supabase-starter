"use client"
import {useState} from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {Button, buttonVariants} from "@/components/ui/button";
import {Menu} from "lucide-react";
import Link from "next/link";

export interface RouteProps {
    href: string;
    label: string;
}

interface NavbarProps {
    title: string;
    menuOptions: RouteProps[];
    buttonLabel: string;
    buttonUrl: string
}

export const Navbar = ({title, menuOptions, buttonLabel, buttonUrl}: NavbarProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white">
            <NavigationMenu className="mx-auto">
                <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
                    <NavigationMenuItem className="font-bold flex">
                        <a href="/" className="ml-2 font-bold text-xl flex">
                            {title}
                        </a>
                    </NavigationMenuItem>

                    {/* mobile */}
                    <span className="flex md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger className="px-2">
                                <Menu className="flex md:hidden h-5 w-5" onClick={() => setIsOpen(true)}/>
                            </SheetTrigger>

                            <SheetContent side={"left"}>
                                <SheetHeader>
                                    <SheetTitle className="font-bold text-xl">{title}</SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                                    {menuOptions.map(({href, label}: RouteProps) => (
                                        <a key={label} href={href} onClick={() => setIsOpen(false)}
                                           className={buttonVariants({variant: "ghost"})}>
                                            {label}
                                        </a>
                                    ))}
                                    <a href={buttonUrl}
                                       className={`w-full border ${buttonVariants({variant: "secondary"})}`}>
                                        {buttonLabel}
                                    </a>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </span>

                    {/* desktop */}
                    <nav className="hidden md:flex gap-2">
                        {menuOptions.map((route: RouteProps, i) => (
                            <a href={route.href} key={i} className={`${buttonVariants({variant: "ghost"})}`}>
                                {route.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex gap-2">
                        <Button asChild>
                            <Link href={buttonUrl}>
                                {buttonLabel}
                            </Link>
                        </Button>
                        {/*<a href={buttonUrl} className={`border ${buttonVariants({ variant: "secondary" })}`}>*/}
                        {/*    {buttonLabel}*/}
                        {/*</a>*/}
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
};

export default Navbar;
