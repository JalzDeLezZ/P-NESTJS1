import { SetMetadata } from '@nestjs/common';
import { Role } from '../models/roles.model';

export const ROLES_KEY = 'rolesKey';

//? input: Roles(Role.ADMIN, Role.CUSTOMER) > check if user has one of these roles
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
