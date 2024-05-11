"use client"
import {SubmitHandler} from "react-hook-form";
import {createSupabaseClient} from "@/lib/supabase/client";
import {LoginCard, SignInInput} from "@/components/auth/LoginCard";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {ROUTES} from "@/lib/const/routes";
import {useToast} from "@/components/ui/use-toast";

export const PasswordLogin = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const {toast} = useToast()

    const onSubmit: SubmitHandler<SignInInput> = async (data) => {
        const client = createSupabaseClient()
        if (data.email && data.password) {
            setLoading(true)
            const res = await client.auth.signInWithPassword({
                email: data.email,
                password: data.password
            })
            if (res.error) {
                toast({
                    title: res.error.message,
                    variant: "error"
                })
                console.log("Error", res.error.message)
            } else {
                toast({
                    title: "Logging in...",
                    variant: "success",
                    duration: 1000
                })
                router.push(ROUTES.APP_HOME)
            }

        } else {
            //     Do nothing
        }
        setLoading(false)

    }

    return (
        <>
            <LoginCard title={"Sign in with password"}
                       view={"password_login"}
                       loading={loading}
                       onSubmit={onSubmit}/>
        </>
    )

}