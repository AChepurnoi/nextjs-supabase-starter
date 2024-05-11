import React, {useContext} from "react";
import {User} from "@supabase/auth-js";


export type AuthContextType = {
    user: User
}

export const AuthContext = React.createContext<AuthContextType>({
    user: {} as User,
});

