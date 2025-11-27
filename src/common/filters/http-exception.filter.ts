import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    let message: string | string[] = 'Validation failed';
    let errors: unknown;

    if (typeof exceptionResponse === 'string') {
      message = exceptionResponse;
    } else if (
      typeof exceptionResponse === 'object' &&
      exceptionResponse !== null
    ) {
      const responseObj = exceptionResponse as {
        message?: string | string[];
        error?: string;
        errors?: any;
      };
      message = responseObj.message || responseObj.error || 'Validation failed';
      errors = responseObj.errors;
    }

    // Format response giống Laravel validation errors
    response.status(status).json({
      success: false,
      message,
      errors: errors || (Array.isArray(message) ? message : undefined),
      data: null,
      timestamp: new Date().toISOString(),
    });
  }
}
