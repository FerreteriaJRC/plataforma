import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { signInAuth } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entity/user.entity';

@Injectable()
export class AuthService {

  constructor(@InjectRepository(User) private userRepositoty: Repository<User>){}
  
    async signIn(user: signInAuth): Promise<User> {
      const foundUser = await this.userRepositoty.findOne({where: {emailPersonal: user.emailPersonal}})
      if(!foundUser){
        throw new Error('No existe cuenta para este usuario')
      }
      return foundUser;
    }

    async signUp(user: CreateAuthDto){
      const foundUser = await this.userRepositoty.findOne({where: {emailPersonal: user.emailPersonal}})
      if(foundUser){
        throw new Error('Ya existe una cuenta para este usuario')
      }
      return this.userRepositoty.save(user)
    }
}