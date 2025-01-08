import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common"
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Roles } from "src/users/roles.enum";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor (private readonly reflector: Reflector){}//El reflector sirve para interactuar con metadatos

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>{
        const requiredRoles = this.reflector.getAllAndOverride<Roles[]>('roles', [
            context.getHandler(),
            context.getClass()
        ])

        const request = context.switchToHttp().getRequest()
        const user = request.user;
        console.log(user)
        const hasRole = () => requiredRoles.some((role) => user?.roles?.includes(role))
        const valid = user && user.roles && hasRole();
        if(!valid){
            throw new ForbiddenException("No tienes permiso")
        }
        return valid
    }
}