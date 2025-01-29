import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

const ACCESS = "Esta es mi clave secreta"

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [UsersService, UserRepository, {
    provide: 'ACCESS_TOKEN',
    useValue: ACCESS
  }],
  controllers: [UsersController]
})
export class UsersModule {}
