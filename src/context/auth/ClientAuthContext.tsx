"use client"
import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {createSupabaseClient} from "@/lib/supabase/client";
import {Session} from "@supabase/auth-js";
import { AuthContext } from './types';

export const ClientAuthContextProvider = (props: any) => {
    // const [isAuth, setIsAuth] = React.useState(false);
    // const client = createSupabaseClient()

    // const [session, setSession] = useState<Session | null>(null)

    // useEffect(() => {
    //     client.auth.getSession().then(({data: {session}}) => {
    //         setSession(session)
    //         console.log("[C-Auth]:", session)
    //
    //     })
    //
    //     const {data: {subscription}} =
    //         client.auth.onAuthStateChange((_event, session) => {
    //             setSession(session)
    //             console.log("[C-AuthU]:", session)
    //
    //         })
    //
    //
    //     return () => subscription.unsubscribe()
    // }, [])

    console.log("[C-Auth]:", props.value)

    return (
        <AuthContext.Provider value={{user: props.value}}>
            {props.children}
        </AuthContext.Provider>
    );
};

