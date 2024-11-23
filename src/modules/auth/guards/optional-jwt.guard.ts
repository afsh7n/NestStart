import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class OptionalJwtAuthGuard extends AuthGuard('jwt') {
  /**
   * Allow access even without a valid token
   */
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    // If no Authorization header exists, allow access
    if (!authHeader) {
      return true;
    }

    return super.canActivate(context);
  }

  /**
   * Override handleRequest to allow requests without user
   */
  handleRequest(err: any, user: any, info: any) {
    if (err || !user) {
      // Allow request to proceed without a user
      return null;
    }
    return user;
  }
}
