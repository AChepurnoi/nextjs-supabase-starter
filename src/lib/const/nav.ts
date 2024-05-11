import {ROUTES} from "@/lib/const/routes";
import {Home, Settings, ShoppingCart} from "lucide-react";

export const APP_NAVIGATION_LINKS = [
    {
        href: ROUTES.APP_HOME,
        label: "Home",
        icon: Home,
    },
    {
        href: ROUTES.APP_BILLING,
        label: "Billing",
        icon: ShoppingCart,
    },
    {
        href: ROUTES.APP_PROFILE_SETTINGS,
        label: "Settings",
        icon: Settings,
    },
]
