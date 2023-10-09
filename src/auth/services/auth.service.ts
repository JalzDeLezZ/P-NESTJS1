/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(
    inn_email: string,
    inn_password: string,
  ): Promise<User | null> {
    const user = await this.usersService.findByEmail(inn_email);
    const isMatch = await bcrypt.compare(inn_password, user['password']);
    if (user && isMatch) {
      const { password, ...result } = user.toJSON();
      return result as User;
    }
    return null;
  }
}
