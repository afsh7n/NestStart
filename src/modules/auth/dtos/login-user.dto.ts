import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

/**
 * DTO for user login
 */
export class LoginUserDto {
  @ApiProperty({
    description: 'Username of the user',
    example: 'john_doe',
  })
  @IsNotEmpty({ message: 'Username is required' })
  @IsString({ message: 'Username must be a string' })
  username: string;

  @ApiProperty({
    description: 'Password of the user',
    example: 'secure_password_123',
  })
  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password must be a string' })
  password: string;
}
