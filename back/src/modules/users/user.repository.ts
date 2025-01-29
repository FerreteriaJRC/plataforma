import { Injectable } from "@nestjs/common";
import { IUser } from "./interface/users.interface";

@Injectable()

export class UserRepository{
    private users: IUser[] = [
        {
            "id": 1,
            "name": "Jhon Darwin",
            "surname": "Llanos Narvaez",
            "ocupation": "Lider de sistemas",
            "emailPesonal": "jhondarwinllanosnarvaez@gmail",
            "emailProfessional" : "sistemas@ferreteriajrc.com",
            "urlImg": "sdf",
        },
        {
            "id": 2,
            "name": "Anderson",
            "surname": "Serrano",
            "ocupation": "Ventas Mostrador",
            "emailPesonal": "anderson@gmail",
            "emailProfessional" : null,
            "urlImg": "sdf"
        },
        {
            "id": 3,
            "name": "Lorena",
            "surname": "Guerrero",
            "ocupation": "Caja",
            "emailPesonal": "lorena@gmail",
            "emailProfessional" : "caja@ferreteriajrc.com",
            "urlImg": "usd"
        },
    ]

    getAllUsers(){
        return this.users;
    }

    getUserById(id: number): IUser | undefined{
        return this.users.find(users => users.id === id)
    }

    createUser(user: IUser){
        this.users = [...this.users, user]
        return user
    }

    updateUserById(id: number, user: any){
        const userIndex = this.users.findIndex(user => user.id === id)

        if(userIndex === -1){
            return "Usuario no encontrado repositorio"
        }else{
            this.users[userIndex] = {
                ...this.users[userIndex],
                ...user
            }
        }
    }

    deleteUserById(id: number){
        const searchUserById = this.users.findIndex(user => user.id === id)
        console.log(`Valor del id parametro ${id} valor de user id ${searchUserById}`)

        if(searchUserById === -1){
            return `El usuario con el id ${id} no existe`
        }

        this.users.splice(searchUserById, 1)
        return "Producto eliminado correctamente"
    }
}