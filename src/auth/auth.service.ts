import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { AuthenticatedUser, LoginResponse } from './types';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<AuthenticatedUser> {
    const user: User | null = await this.usersService.findByEmail(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload: AuthenticatedUser = {
      username: user.name,
      sub: user.id,
    };
    return payload;
  }

  async login(loginDto: LoginDto): Promise<LoginResponse> {
    const payload: AuthenticatedUser = await this.validateUser(
      loginDto.email,
      loginDto.password,
    );
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
