export interface IUser {
    id: number,
    name: string,
    surname: string,
    ocupation: string,
    emailPesonal: string,
    emailProfessional? : string | null,
    urlImg: string
}