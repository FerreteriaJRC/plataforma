import { Injectable } from "@nestjs/common";

@Injectable()

export class UserRepository{
    private Users = [
        {
            "nombre": "Jhon Darwin",
            "apellidos": "Llanos Narvaez",
            "cargo": "Lider de sistemas",
            "correoPersonal": "jhondarwinllanosnarvaez@gmail",
            "correoProfesional" : "sistemas@ferreteriajrc.com",
        },
        {
            "nombre": "Anderson",
            "apellidos": "Serrano",
            "cargo": "Ventas Mostrador",
            "correoPersonal": "anderson@gmail",
            "correoProfesional" : null,
        },
        {
            "nombre": "Lorena",
            "apellidos": "Guerrero",
            "cargo": "Caja",
            "correoPersonal": "lorena@gmail",
            "correoProfesional" : "caja@ferreteriajrc.com",
        },
    ]

    getAllUsers(){
        return this.Users;
    }
}