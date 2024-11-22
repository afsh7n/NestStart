import { CustomHttpException } from './http.exception';
import { HttpStatusEnum } from "../enums/http-status.enum";

/**
 * Exception class for handling database-related errors.
 */
export class DatabaseException extends CustomHttpException {
  constructor(message: string = 'A database error occurred.') {
    super(message, HttpStatusEnum.INTERNAL_SERVER_ERROR);
  }
}
