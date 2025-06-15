import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const AuthContext = createContext();

export default function AuthProvider({children}){
    const [Token, Token_Set] = useState(localStorage.getItem('Token'));
    const [Account, Account_Set] = useState(null);
    const [Loading, Loading_Set] = useState(true);

    useEffect(() => {
        if (!Token){
            Account_Set(null);
            Loading_Set(false);
            return;
        }

        Loading_Set(true);

        axios
        .get("/api/Accounts/Profile", {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
        .then(res => {
            Account_Set(res.data);
        })
        .catch(() => {
            localStorage.removeItem("Token");
            Token_Set(null);
            Account_Set(null);
        })
        .finally(() => Loading_Set(false));
    }, [Token]);

    const Login = (Token_New) => {
        localStorage.setItem("Token", Token_New);
        Token_Set(Token_New);
    }

    const Logout = () => {
        localStorage.removeItem("Token");
        Token_Set(null);
    }


    return (
        <AuthContext.Provider value={{Account, Loading, Login, Logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext);
}