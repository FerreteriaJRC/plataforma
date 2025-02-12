export interface ILoginProps{
    username: string,
    password: string
}

export interface IRegisterProps{
    name: string,
    surname: string,
    nameUser: string,
    password: string,
    confirmPassword: string,
    ocupation: string,
    personalEmail: string,
    profesionalEmail: string
}

export interface AuthResponse{
    succes: string
    user: IRegisterProps
    token: string
}