"use client"

import {useContext} from "react";
import {AuthContext, AuthContextType} from "@/context/auth/types";

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error(`AuthContext Undefined`);
    }
    return context;
};
