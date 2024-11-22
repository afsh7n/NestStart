import { Injectable, Logger, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends Logger {
  /**
   * Log a standard message
   * @param message - The message to log
   * @param context - Context or source of the log
   */
  log(message: string, context?: string): void {
    super.log(message, context || this.contextName());
  }

  /**
   * Log a warning message
   * @param message - The warning message to log
   * @param context - Context or source of the log
   */
  warn(message: string, context?: string): void {
    super.warn(message, context || this.contextName());
  }

  /**
   * Log an error message
   * @param message - The error message to log
   * @param trace - Optional stack trace
   * @param context - Context or source of the log
   */
  error(message: string, trace?: string, context?: string): void {
    super.error(message, trace, context || this.contextName());
  }

  /**
   * Log a debug message (only visible in development mode)
   * @param message - The debug message to log
   * @param context - Context or source of the log
   */
  debug(message: string, context?: string): void {
    if (process.env.NODE_ENV === 'development') {
      super.debug(message, context || this.contextName());
    }
  }

  /**
   * Log a verbose message (for detailed insights)
   * @param message - The verbose message to log
   * @param context - Context or source of the log
   */
  verbose(message: string, context?: string): void {
    if (process.env.NODE_ENV === 'development') {
      super.verbose(message, context || this.contextName());
    }
  }

  /**
   * Set the default context for the logger
   * @returns The default context name
   */
  private contextName(): string {
    return 'LoggerService';
  }
}
