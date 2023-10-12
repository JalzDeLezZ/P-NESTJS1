/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '../../users/entities/user.entity';

import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from '../models/token.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    inn_email: string,
    inn_password: string,
  ): Promise<User | null> {
    const user = await this.usersService.findByEmail(inn_email);
    if (!user) throw new NotFoundException('User not found');
    const isMatch = await bcrypt.compare(inn_password, user['password']);
    if (user && isMatch) {
      const { password, ...result } = user.toJSON();
      return result as User;
    }
    return null;
  }

  generateJWT(user: User) {
    const id = user._id.toString();
    const payload: TokenPayload = { role: user.role, identity: id };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
