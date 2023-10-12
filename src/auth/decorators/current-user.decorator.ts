// auth/current-user.decorator.ts
import {
  createParamDecorator,
  ExecutionContext,
  PreconditionFailedException,
} from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const { user } = request;
    if (!user) {
      throw new PreconditionFailedException('User not authenticated.');
    }
    return user;
  },
);
