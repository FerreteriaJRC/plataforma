import React from "react"

//*Login
export interface ILoginRequest{
    username: string,
    password: string
}

export interface ILoginErrors{
    username?: string,
    password?: string
}


//*IRegister
export interface IRegisterProps{
    name: string,
    surname: string,
    nameUser: string,
    password: string,
    confirmPassword: string,
    ocupation: string,
    emailPersonal: string,
    emailProfesional: string,
    rol?: string
}

export interface IRegisterResponse{
    id: string,
    name: string,
    surname: string,
    nameUser: string,
    ocupation: string,
    emailPersonal: string,
    emailProfesional: string,
    rol: string
}

export interface ILoginResponse{
    success: string,
    user: IRegisterProps,
    token: string
}

export interface EventItemProps{
    label: string,
    href: string,
    isActive: boolean,
}

export interface INavItemProps extends EventItemProps{
    icon: React.ReactNode
}

// export interface AuthResponse{
//     data: {
//         token: string
//         user: IUser
//     }
//     loggin: boolean
// }

// export interface IUserContextProps {
//     userNormal: IUser | null;
//     setUser: (user: IUser | null) => void;
//     token: string | null;
//     setToken: (token: string | null) => void;
//     logoutUser: () => void;
// }
