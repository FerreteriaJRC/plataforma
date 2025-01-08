import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

function ValidateRequest (request: Request){
    const token = request.headers['token'];
    return token === '1234'
}

@Injectable()
export class AdminGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        console.log(request)
        return ValidateRequest(request)
    }
}