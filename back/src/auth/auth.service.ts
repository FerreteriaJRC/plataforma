import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entity/user.entity';

@Injectable()
export class AuthService {

  constructor(@InjectRepository(User) private userRepositoty: Repository<User>){}
  
    signIn(id: string) {
      return this.userRepositoty.findOne({ where: { id } })
    }

    signUp(user: CreateAuthDto){
      return this.userRepositoty.save(user)
    }
}