import { CustomHttpException } from './http.exception';
import { HttpStatusEnum } from "../enums/http-status.enum";

/**
 * Exception class for handling not found (404) errors.
 */
export class NotFoundException extends CustomHttpException {
  constructor(resource: string = 'Resource') {
    super(`${resource} not found.`, HttpStatusEnum.NOT_FOUND);
  }
}
