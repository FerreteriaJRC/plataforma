import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserRepository } from 'src/modules/users/user.repository';
import { UsersModule } from 'src/modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/modules/users/entity/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]), UsersModule, JwtModule.register({
     global: true,
     secret: process.env.JWT_SECRET || 'clavesecret',
     signOptions: {expiresIn: '1d'}})
    ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
