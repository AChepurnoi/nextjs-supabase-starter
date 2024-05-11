import {CookieConsentValues} from "@/components/shared/cookies/types";
import posthog from "posthog-js";

export function updatePHConsent(value: CookieConsentValues){
    posthog.set_config({ persistence: value === 'yes' ? 'localStorage+cookie' : 'memory' });
}