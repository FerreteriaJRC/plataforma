import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class Middleware implements NestMiddleware{
  use(req: Request, res: Response, next: NextFunction){
    console.log("Ejecutando El middleware")
    next()
  }
}

export function MiddlewareDateMiddleware (req: Request, res: Response, next: NextFunction) {
    console.log(`Ejecutando el Middleware en la ruta ${req.path} y en ${req.hostname}`)
    next();
}
