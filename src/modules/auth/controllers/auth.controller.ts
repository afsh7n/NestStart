import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';
import { LoginUserDto } from '../dtos/login-user.dto';
import { RegisterUserDto } from '../dtos/register-user.dto';
import { ValidationException } from "../../../common/exceptions/validation.exception";
import { ForbiddenException } from "../../../common/exceptions/forbidden.exception";

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Register a new user
   * @param registerUserDto - User registration data
   */
  @ApiBody({ type: RegisterUserDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'User successfully registered',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Validation error',
  })
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerUserDto: RegisterUserDto) {
    try {
      // Validate incoming data
      if (!registerUserDto.username || !registerUserDto.email || !registerUserDto.password) {
        throw new ValidationException(['Invalid registration data']);
      }

      return this.authService.register(registerUserDto);
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new BadRequestException(error.message);
      }

      throw error;
    }
  }

  /**
   * User login
   * @param loginUserDto - User login credentials
   */
  @ApiBody({ type: LoginUserDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User successfully logged in',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Invalid credentials',
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginUserDto: LoginUserDto) {
    try {
      // Validate incoming data
      if (!loginUserDto.username || !loginUserDto.password) {
        throw new ValidationException(['Username and password are required']);
      }

      const token = await this.authService.login(loginUserDto);

      if (!token) {
        throw new ForbiddenException('Invalid credentials');
      }

      return token;
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new BadRequestException(error.message);
      }

      if (error instanceof ForbiddenException) {
        throw error;
      }

      throw error;
    }
  }
}
