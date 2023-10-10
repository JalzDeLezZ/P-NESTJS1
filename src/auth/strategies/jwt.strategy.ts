import { Injectable, Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';

import { ConfigType } from '@nestjs/config';
import config from '../../config';
import { TokenPayload } from '../models/token.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(@Inject(config.KEY) configService: ConfigType<typeof config>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.jwtSecret,
    });
  }

  validate(payload: TokenPayload) {
    return payload;
  }
}

/* Test: 1. Protected Products Routes (Controller)
    > Send a GET request to http://localhost:3000/products
    > Add the following header:
        Key: Authorization
        Value: Bearer <token>
    > Send the request and verify that the response is 200 OK and the data is returned.
*/
