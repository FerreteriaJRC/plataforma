export interface ILoginProps{
    username: string,
    password: string
}

export interface ILoginErrors{
    username?: string,
    password?: string
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
    data: {
        token: string
        user: IUser
    }
    loggin: boolean
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

export interface IUserContextProps {
    userNormal: IUser | null;
    setUser: (user: IUser | null) => void;
    token: string | null;
    setToken: (token: string | null) => void;
    logoutUser: () => void;
}