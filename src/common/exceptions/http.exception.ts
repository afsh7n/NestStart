import { HttpException } from '@nestjs/common';
import { HttpStatusEnum } from "../enums/http-status.enum";

/**
 * Custom HTTP Exception class for managing general HTTP errors.
 */
export class CustomHttpException extends HttpException {
  constructor(message: string, status: HttpStatusEnum) {
    super(
      {
        statusCode: status,
        message,
        timestamp: new Date().toISOString(),
      },
      status,
    );
  }
}
