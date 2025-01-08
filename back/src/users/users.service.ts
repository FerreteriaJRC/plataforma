import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { IUser } from './interface/users.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        //private userRepository: UserRepository, 
        //@Inject('ACCESS_TOKEN') private accessToken: string,
        @InjectRepository(User) private userRepository: Repository<User>
    ){}

    getUserDb(){
        return this.userRepository.find()
    }

    getUserByIdDb(id: any){
        return this.userRepository.findOne({where: {id}})
    }

    createUser(user: User){
        console.log(user)
        this.userRepository.save(user)
        return ("Usuario creado")
    }

    updateUserById(id, user){
        const res = this.userRepository.update(id, user)
        return ("Usuario actualizado"+ res)
    }

    deleteUserById(id: string){
        this.userRepository.delete(id)
        return(`Usuario eliminado correctamente`)
    }
    // async updateUser(id: any, user: IUser){
    //     return await this.userRepository.update(id, user)
    // }

    // async deleteUser(id: any){
    //     return await this.userRepository.delete(id)
    // }


    
    // getAllUsers(){
    //     if(this.accessToken == "Esta es mi clave secreta"){
    //         return this.userRepository.getAllUsers();
    //     }else{
    //         return "No tiene acceso a la informacion"
    //     }
    // }

    // getUserById(id: number): IUser | undefined{
    //     if(!id){
    //         throw new Error('El id es requerido')
    //     }
    //     const user = this.userRepository.getUserById(id)
    //     if(!user){
    //         throw new Error(`Usuario con el id ${id} no fue encontrado`)
    //     }
    //     return user
    // }

    // createUser(user: IUser){
    //     return this.userRepository.createUser(user);
    // }

    // updateUserById(id: number, user: any){
    //     if(!id || !user){
    //         throw new Error('Falta ingresar parametro o el body')
    //     }
    //     return this.userRepository.updateUserById(id, user);
    // }

    // deleteUserById(id: number){
    //     return this.userRepository.deleteUserById(id)
    // }
}
