import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest, NextResponse } from 'next/server'
import {createSupabaseServerClient} from "@/lib/supabase/server";
import {ROUTES} from "@/lib/const/routes";


export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code')
    const next = searchParams.get('next') ?? ROUTES.MAGIC_LINK_LOGIN

    const redirectTo = request.nextUrl.clone()
    redirectTo.pathname = next
    redirectTo.searchParams.delete('code')

    if (code) {
        const supabase = createSupabaseServerClient()
        try {
            const {error} = await supabase.auth.exchangeCodeForSession(code)
            if (!error) {
                redirectTo.searchParams.delete('next')
                return NextResponse.redirect(redirectTo)
            }
        }catch (e) {
            console.log("Error:", e)
        }
    }

    // return the user to an error page with some instructions
    redirectTo.pathname = ROUTES.AUTH_ERROR
    return NextResponse.redirect(redirectTo)
}