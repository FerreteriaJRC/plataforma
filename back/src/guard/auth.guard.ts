import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import * as jwt from 'jsonwebtoken';
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers['authorization'];
        
        // const token = request.headers.authorization;
        
        if(!authHeader){
            throw new UnauthorizedException('No tienes un token')
        }

const token = authHeader.split(' ')[1];

        try {
            const secret = process.env.JWT_SECRET || 'clavesecret'
            const payload = this.jwtService.verify(token, {secret});
            request.user = payload
            console.log("Usuario Autenticado")
            return true
        } catch (error) {
            throw new UnauthorizedException('Token invalido')
        }
    }
    
}