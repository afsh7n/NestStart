import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from '../dtos/register-user.dto';
import { LoginUserDto } from '../dtos/login-user.dto';
import * as bcrypt from 'bcrypt';
import { UserRepository } from "../../user/repositories/user.repository";
import { UserEntity } from "../../user/entities/user.entity";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
  ) {}

  /**
   * Registers a new user
   * @param registerUserDto - User registration data
   * @returns Success message
   */
  async register(registerUserDto: RegisterUserDto): Promise<{}> {
    const { username, email, password } = registerUserDto;

    // Check if the user already exists
    const existingUser = await this.userRepository.findByUsernameOrEmail(username, email);
    if (existingUser) {
      throw new BadRequestException('Username or email is already taken.');
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    let user =  await this.userRepository.create({
      username,
      email,
      password: hashedPassword,
    });
    const payload = { username: user.username, sub: user.id };
    const token = this.jwtService.sign(payload);
    return { access_token: token , user:user };
  }

  /**
   * Authenticates a user and returns a JWT token
   * @param loginUserDto - User login credentials
   * @returns JWT access token
   */
  async login(loginUserDto: LoginUserDto): Promise<{}> {
    const { username, password } = loginUserDto;

    // Find the user by username
    const user : UserEntity = await this.userRepository.findByUsername(username);
    if (!user) {
      throw new UnauthorizedException('Invalid username or password.');
    }

    // Validate the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid username or password.');
    }

    // Generate and return the JWT token
    const payload = { username: user.username, sub: user.id };
    const token = this.jwtService.sign(payload);

    return { access_token: token , user:user };
  }
}
