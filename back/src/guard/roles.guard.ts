import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { match } from 'assert';
import { Observable } from 'rxjs';
import { Role } from 'src/enums/roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {} //El reflector sirve para interactuar con metadatos

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<Role[]>('roles', context.getHandler());
    console.log(`Roles de handler: ${roles}`);//Esta bien
    try {
      if (!roles) {
        throw new Error('Roles decorator no definido');
      }
      const request = context.switchToHttp().getRequest();
      const user = request.user;
      console.log("Usuario de request.user:", JSON.stringify(request.user, null, 2));

      if (!user || !user.rol) {
        throw new ForbiddenException("Usuario no autenticado o sin roles");
      }

      const hasRole = roles.includes(user.rol as Role)
      console.log(`User roles:`, user.roles);
    console.log(`Roles requeridos:`, roles);

      if (!hasRole) {
        throw new ForbiddenException(
          'No tienes permisos para realizar esta acción',
        );
      }

      return true;
    } catch (error) {
      throw new ForbiddenException(
        'No tienes permisos para realizar esta acción CATCH',
        error,
      );
    }
  }
}
