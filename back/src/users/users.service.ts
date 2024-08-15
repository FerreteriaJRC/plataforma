import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
    constructor(private userRepository: UserRepository){}
    
    getAllUsers(){
        return this.userRepository.getAllUsers();
    }
}
