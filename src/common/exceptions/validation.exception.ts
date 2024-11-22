import { CustomHttpException } from './http.exception';
import { HttpStatusEnum } from "../enums/http-status.enum";

/**
 * Exception class for handling validation-related errors.
 */
export class ValidationException extends CustomHttpException {
  constructor(errors: string[]) {
    super(
      `Validation failed: ${errors.join(', ')}`,
      HttpStatusEnum.BAD_REQUEST,
    );
  }
}
