import React, {useEffect, useState} from "react";
import {createSupabaseServerClient} from "@/lib/supabase/server";
import {ClientAuthContextProvider} from "@/context/auth/ClientAuthContext";
import {User} from "@supabase/auth-js";
import {redirect} from "next/navigation";
import {ROUTES} from "@/lib/const/routes";


export type ServerAuthContextType = {
    enableHomeRedirect?: boolean | undefined
    children: React.ReactNode | React.ReactNode[]
}

export const OptionalAuthServerProvider =  async (props: ServerAuthContextType) => {

    const client = createSupabaseServerClient()
    const { data} = await client.auth.getUser();
    console.log("[S-Auth", data)
    if(props.enableHomeRedirect && data.user != null){
        redirect(ROUTES.APP_HOME)
    }

    return (
        <ClientAuthContextProvider value={data.user}>
            {props.children}
        </ClientAuthContextProvider>
    );
};

export const RequiredAuthServerProvider =  async (props: ServerAuthContextType) => {

    const client = createSupabaseServerClient()
    const { data} = await client.auth.getUser();
    console.log("[S-Auth", data)

    if(data.user == null){
        redirect(ROUTES.MAGIC_LINK_LOGIN)
    }

    return (
        <ClientAuthContextProvider value={data.user}>
            {props.children}
        </ClientAuthContextProvider>
    );
};

