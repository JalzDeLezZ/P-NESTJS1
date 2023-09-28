import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requert = context.switchToHttp().getRequest<Request>();
    const authHeader = requert.header('Auth');
    const isAuth = authHeader === 'test';

    if (!isAuth) {
      throw new UnauthorizedException('Not allowed');
    }
    return isAuth;
  }
}
