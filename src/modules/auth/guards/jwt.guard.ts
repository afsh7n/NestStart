import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  /**
   * Custom error handling for unauthorized access
   * @param err - Error from Passport
   * @param user - Decoded user object
   * @param info - Additional info about the error
   */
  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    if (err || !user) {
      throw new UnauthorizedException(
        err?.message || 'Authentication failed. Please provide a valid token.',
      );
    }
    return user;
  }
}
