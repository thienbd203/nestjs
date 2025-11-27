export interface AuthenticatedUser {
  sub: number;
  username: string;
}

export interface LoginResponse {
  access_token: string;
}

export interface JwtPayload {
  sub: string;
  username: string;
  email: string;
  iat?: number;
  exp?: number;
}
