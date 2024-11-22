import { CustomHttpException } from './http.exception';
import { HttpStatusEnum } from "../enums/http-status.enum";

/**
 * Exception class for handling forbidden (403) errors.
 */
export class ForbiddenException extends CustomHttpException {
  constructor(message: string = 'Access to this resource is forbidden.') {
    super(message, HttpStatusEnum.FORBIDDEN);
  }
}
