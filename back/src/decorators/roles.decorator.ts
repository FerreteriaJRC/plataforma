import { SetMetadata } from "@nestjs/common";
import { Roles } from "src/users/roles.enum";

export const Rolesapp = (...roles: Roles[]) => SetMetadata('roles', roles)