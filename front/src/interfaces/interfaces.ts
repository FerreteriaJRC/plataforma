export interface ILoginProps{
    username: string,
    password: string
}

export interface ILoginErrors{
    username?: string,
    error?: string
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

export interface IUser{
    id: string,
    name?: string,
    surname?: string,
    nameUser?: string,
    ocupation?: string,
    emailPersonal?: string,
    emailProfesional?: string,
    rol?: string
}