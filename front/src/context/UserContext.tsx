'use client'

import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { IUser, IUserContextProps } from "../interfaces/interfaces";
import { validateToken } from "../helpers/auth.helper";

export const UserContex = createContext<IUserContextProps>({
    userNormal: null,
    setUser: () => {},
    token: null,
    setToken: () => {},
    logoutUser: () => {}
});

export const UserContextProvider = ({ children }:{ children: React.ReactNode }) => {
    const [userNormal, setUser] = useState< IUser | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const handleLogout = () => {
        Cookies.remove("appSesion");
        Cookies.remove("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken(null);
        window.location.href = "/home"
    }

    const logoutUser = () => {
        handleLogout();
    }

    useEffect(() =>  {
        const storedUser = localStorage.getItem("user");
        const storedToken = Cookies.get("token");

        if(storedToken){
            setToken(storedToken);

        //*Funcion helper para validar el token
        validateToken(storedToken).then((data) => {
            if(data.isValid && data.payload){
                setUser(storedUser ? JSON.parse(storedUser): null)
            } else {
                handleLogout();
            }
        })
        .catch(() => {
            handleLogout();
        });
    } else {
        setUser(null);
        setToken(null);
    }}, []);

    return(
        <UserContex.Provider value={{userNormal, setUser, token, setToken, logoutUser}}>
            {children}
        </UserContex.Provider>
    );
};

export const useUserContext = () => useContext(UserContex);

