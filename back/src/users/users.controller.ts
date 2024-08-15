import { Controller, Get } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get('list')
    getAllUsers(req: Request, res: Response, next: NextFunction){
        return this.usersService.getAllUsers();
    }
}
