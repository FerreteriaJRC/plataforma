import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getAllUsers(): string{
        return `Bienvenido a la plataforma de FERRETERIA JRC CIA LTDA, estas sobre la ruta de usuarios`
    }
}
