import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { signInAuth } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/modules/users/entity/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User) private userRepositoty: Repository<User>,
    private jwtService: JwtService
  ){}
  
    async signIn(user: signInAuth): Promise<{user: Omit<User, 'password' | 'confirmPassword' >, token: string, succes: string}> {
      const foundUser = await this.userRepositoty.findOne({where: {nameUser: user.nameUser}});
      if(!foundUser){
        throw new BadRequestException('No existe cuenta para este usuario')
      }

      const payload = { nameUser: foundUser.nameUser, sub: foundUser.id , rol: foundUser.rol};
      console.log(`Valor de payload ${JSON.stringify(payload)}`);

      const validation = await bcrypt.compare(user.password, foundUser.password);

      if(!validation){
        throw new BadRequestException('Contraseña incorrecta')
      }

      const token = this.jwtService.sign(payload);

      const { password, ...result } = foundUser;

      return {succes: "Usuario Logueado", user: result, token};
    }

    async signUp(user: CreateAuthDto): Promise<Omit<User, 'password' | 'confirmPassword' >> {
      const foundUser = await this.userRepositoty.findOne({where: [{emailPersonal: user.emailPersonal}, {emailProfesional: user.emailProfesional}, {nameUser: user.nameUser}]})
      if(foundUser){
        throw new BadRequestException('Ya existe una cuenta para este usuario')
      }

      const hashedPassword = user.password === user.confirmPassword;
      if(!hashedPassword){
        throw new BadRequestException('Las contraseñas no coinciden')
      }

      const encriyptPassword = await bcrypt.hash(user.password, 10);

      const newUser = this.userRepositoty.create({  
        ...user,
        password: encriyptPassword
      })

      const savedUser = await this.userRepositoty.save(newUser);

      const { password, ...result } = savedUser;
      return result;
    }
}