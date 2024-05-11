"use client"
import {SubmitHandler} from "react-hook-form";
import {createSupabaseClient} from "@/lib/supabase/client";
import {LoginCard, SignInInput} from "@/components/auth/LoginCard";
import {useState} from "react";
import {createPublicEnvs} from "@/lib/env";
import {ROUTES} from "@/lib/const/routes";
import {useToast} from "@/components/ui/use-toast";

export const PasswordSignup = () => {
    const [loading, setLoading] = useState(false)
    const {toast} = useToast()

    const onSubmit: SubmitHandler<SignInInput> = async (data) => {
        const client = createSupabaseClient()
        const envs = createPublicEnvs()
        if (data.email && data.password) {
            setLoading(true)
            const res = await client.auth.signUp({
                email: data.email,
                password: data.password,
                options: {
                    emailRedirectTo: envs.PUBLIC_URL + ROUTES.MAGIC_LINK_ROUTE_HANDLER,
                },
            })

            let authError = null;

            // User exists, but is fake. See https://supabase.com/docs/reference/javascript/auth-signup
            if (res.data.user && res.data.user.identities && res.data.user.identities.length === 0) {
                authError = {
                    name: "AuthApiError",
                    message: "User already exists",
                };
            } else if (res.error)
                authError = {
                    name: res.error.name,
                    message: res.error.message,
                };
            console.log(res, authError)
            if (authError) {
                toast({
                    title: authError.message,
                    variant: "error"
                })
                console.log("Error", authError)
            } else {
                toast({
                    title: "Confirmation email has been sent to your email",
                    description: "Please check your email to complete the sign up process.",
                    variant: "success"
                })
            }
        } else {
            //     Do nothing
        }

        setLoading(false)
    }

    return (
        <>
            <LoginCard title={"Sign up with password"}
                       view={"password_signup"}
                       loading={loading}
                       onSubmit={onSubmit}/>
        </>
    )

}