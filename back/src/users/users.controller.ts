import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Res, Req, Next, Delete, HttpStatus, HttpException, UseGuards} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from './users.service';
import { IUser } from './interface/users.interface';
import { ok } from 'assert';
import { User, User as UserEntity} from './entity/user.entity';
import { Roles } from './roles.enum';
import { RolesGuard } from 'src/guard/roles.guard';
import { UpdateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService
    ){}

    @Get()
    //@UseGuards(RolesGuard)
    async getAllUsersDb(){
        return await this.usersService.getUserDb();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string){
        try {
            return await this.usersService.getUserByIdDb(id);    
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'Ocurrio un error al realizar la consulta'
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    // @Post()
    // async createUser(@Body() user: UserEntity){
    //     try {
    //         return await this.usersService.createUser(user)
    //     } catch (error) {
    //         throw new HttpException({
    //             status: HttpStatus.INTERNAL_SERVER_ERROR,
    //             error: 'Ocurrio un error al crear el usuario'
    //         }, HttpStatus.INTERNAL_SERVER_ERROR)
    //     }
    // }

    @Put(':id')
    async updateUserById(@Param('id') id: User, @Body() user: UpdateUserDto){
        try{
            return await this.usersService.updateUserById(id, user);
        }catch(error){
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'Errror al actualizar el usuario'
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Delete(':id')
    async deleteUserById(@Param('id') id: string){
        try {
            return await this.usersService.deleteUserById(id)   
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: `Error al eliminar el usuario`
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
