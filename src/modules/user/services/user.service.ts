import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  /**
   * Get all users
   * @returns List of all users
   */
  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  /**
   * Find a user by ID
   * @param id - User ID
   * @returns The user object
   * @throws NotFoundException if user is not found
   */
  async findOneById(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  /**
   * Create a new user
   * @param userData - Partial user data
   * @returns The created user
   * @throws BadRequestException if the user already exists
   */
  async createUser(userData: Partial<UserEntity>): Promise<UserEntity> {
    let username : string = userData.username;
    let email : string = userData.email;
    const existingUser = await this.userRepository.findOne({
        where: [{ username }, { email }]
    });
    if (existingUser) {
      throw new BadRequestException('Username or email is already taken');
    }
    return this.userRepository.create(userData);
  }

  /**
   * Update a user
   * @param id - User ID
   * @param userData - Partial user data
   * @returns The updated user
   * @throws NotFoundException if user is not found
   */
  async updateUser(id: string, userData: Partial<UserEntity>): Promise<UserEntity> {
    const user = await this.findOneById(id); // Throws if not found
    await this.userRepository.update(id, { ...user, ...userData });
    return  await this.findOneById(id);
  }

  /**
   * Delete a user
   * @param id - User ID
   * @throws NotFoundException if user is not found
   */
  async deleteUser(id: string): Promise<void> {
    const user = await this.findOneById(id); // Throws if not found
    await this.userRepository.delete(id);
  }
}
