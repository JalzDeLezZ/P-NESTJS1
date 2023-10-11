import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES_KEY } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/roles.model';
import { TokenPayload } from 'src/auth/models/token.model';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // ['admin']
    const roles = this.reflector.get<Array<Role>>(
      ROLES_KEY,
      context.getHandler(),
    );

    if (!roles) return true;

    const request = context.switchToHttp().getRequest();
    // { role: 'customer', sub: '123123' }
    const user = request.user as TokenPayload;

    const isAuth = roles.includes(user.role as Role);

    if (!isAuth) throw new ForbiddenException('You do not have permission');

    return isAuth;
  }
}
