import Cookies from "js-cookie";
import { ILoginProps, IRegisterProps, AuthResponse } from "../interfaces/interfaces"

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const register = async(
    userData: IRegisterProps
):Promise<AuthResponse> => {
    const res = await fetch('http://localhost:3000/auth/signup',{
        method: "POST",
        headers: {
            "content-type": "aplication/json"
        },
        body: JSON.stringify(userData),
    })

    const data = await res.json();
    console.log(data)

    return data
}

export const login = async(
    userData: ILoginProps
):Promise<AuthResponse> => {
    const res = await fetch("http://localhost:3000/auth/signin", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    if(!res.ok){
        console.log("Error al iniciar sesion")
    }

    const data: AuthResponse = await res.json();
    return data;
};

export const validateToken = async(token: string) => {
    const res = await fetch(`${APIURL}auth/validate-token`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        credentials: "include"
    });

    if(!res.ok){
        throw new Error(`Error validating token: ${res.statusText}`)
    }

    const data = await res.json();
    return data;
}