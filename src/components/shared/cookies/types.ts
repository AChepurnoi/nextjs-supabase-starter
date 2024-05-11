import "client-only"
export type CookieConsentValues = "yes" | "no" | "undecided" | ''

export function cookieConsentGiven(): CookieConsentValues {
    if (typeof window !== 'undefined') {
        if (!localStorage.getItem('cookie_consent')) {
            return 'undecided';
        }
        return localStorage.getItem('cookie_consent') as CookieConsentValues ?? "undecided";
    }
    return ''
}

export function setCookieConsentGiven(value: CookieConsentValues) {
    localStorage.setItem('cookie_consent', value)
    console.log("CONSENT RECORDED:", value)
}
