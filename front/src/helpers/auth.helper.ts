import Cookies from "js-cookie";
import { ILoginProps, IRegisterProps, AuthResponse } from "../interfaces/interfaces"

// const APIURL = process.env.NEXT_PUBLIC_API_URL;

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