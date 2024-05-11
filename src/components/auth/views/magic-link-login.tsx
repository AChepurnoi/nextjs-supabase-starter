"use client"
import {SubmitHandler, useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {createSupabaseClient} from "@/lib/supabase/client";
import {LoginCard, SignInInput} from "@/components/auth/LoginCard";
import {createPublicEnvs} from "@/lib/env";
import {ROUTES} from "@/lib/const/routes";
import {useToast} from "@/components/ui/use-toast";

export const MagicLinkLogin = () => {
    const [loading, setLoading] = useState(false)
    const {toast} = useToast()

    const onSubmit: SubmitHandler<SignInInput> = async (data) => {
        const client = createSupabaseClient()
        const envs = createPublicEnvs()
        if (data.email) {
            setLoading(true)
            const res = await client.auth.signInWithOtp({
                email: data.email,
                options: {
                    emailRedirectTo: envs.PUBLIC_URL + ROUTES.MAGIC_LINK_ROUTE_HANDLER,
                    shouldCreateUser: true
                },
            })
            if (res.error) {
                toast({
                    title: res.error.message,
                    variant: "error"
                })
                console.log("Error", res.error.message)
            } else {
                toast({
                    title: "Magic Link for login is sent to your email.",
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
            <LoginCard title={"Sign in with magic link"}
                       view={"magic_link_login"}
                       loading={loading}
                       onSubmit={onSubmit}/>
        </>
    )

}