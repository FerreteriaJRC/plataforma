import Cookies from "js-cookie";
import { ILoginRequest, IRegisterProps, ILoginResponse, IRegisterResponse } from "../interfaces/interfaces"

// const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const register = async(
    userData: IRegisterProps
):Promise<IRegisterResponse> => {
    try{
        const res = await fetch('http://localhost:3000/auth/signup',{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData),
        })

        if(!res.ok) throw new Error('Error al registrar usuario');

        const data = await res.json();
        console.log(data);
    
        return data
    } catch(error){
        console.log('Error en la solicitud: ', error);
        throw new Error('Error en la solicitud: ' + error);
    }
}

 export const login = async(userData: ILoginRequest): Promise<ILoginResponse> => {
     try{
         const res = await fetch('http://localhost:3000/auth/signin', {
             method: "POST",
             headers: {
                 "Content-type": "application/json"
           },
             body: JSON.stringify(userData),
         });

         if(!res.ok) throw new Error('Error al iniciar sesion');

         const data = await res.json();
         console.log(data);
    
         return data
     } catch(error){
         console.log('Error en la solicitud: ', error);
         throw new Error('Error en la solicitud: ' + error);
     }
 }

// export const validateToken = async(token: string) => {
//     const res = await fetch(`http://localhost:3000/auth/validate-token`, {
//         method: "POST",
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//         credentials: "include"
//     });

//     if(!res.ok){
//         throw new Error(`Error validating token: ${res.statusText}`)
//     }

//     const data = await res.json();
//     return data;
// }