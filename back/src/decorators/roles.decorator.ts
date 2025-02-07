import { SetMetadata } from "@nestjs/common";
import { Role } from "../enums/roles.enum";

export const Rolesapp = (...roles: Role[]) => SetMetadata('roles', roles)