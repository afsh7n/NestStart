import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  /**
   * Get all users
   * @returns List of all users
   */
  async findAll(): Promise<UserEntity[]> {
    return this.userRepo.find();
  }

  /**
   * Find a user by ID
   * @param id - User ID
   * @returns The user object
   * @throws NotFoundException if user is not found
   */
  async findById(id: string): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  /**
   * Find user by username
   * @param username - Username
   * @returns The user object
   * @throws NotFoundException if user is not found
   */
  async findByUsername(username: string): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ where: { username } });
    if (!user) {
      throw new NotFoundException(`User with username ${username} not found`);
    }
    return user;
  }

  /**
   * Create a new user
   * @param userData - Partial user data
   * @returns The created user
   */
  async create(userData: Partial<UserEntity>): Promise<UserEntity> {
    const user = this.userRepo.create(userData);
    return this.userRepo.save(user);
  }

  /**
   * Update a user
   * @param id - User ID
   * @param userData - Partial user data
   * @returns The updated user
   * @throws NotFoundException if user is not found
   */
  async update(id: string, userData: Partial<UserEntity>): Promise<UserEntity> {
    const user = await this.findById(id); // Ensure the user exists
    return this.userRepo.save({ ...user, ...userData });
  }

  /**
   * Delete a user
   * @param id - User ID
   * @throws NotFoundException if user is not found
   */
  async delete(id: string): Promise<void> {
    const user = await this.findById(id); // Ensure the user exists
    await this.userRepo.remove(user);
  }

  /**
   * Find user by username or email
   * @param username - Username of the user
   * @param email - Email of the user
   * @returns User entity or undefined
   */
  async findByUsernameOrEmail(
    username: string,
    email: string,
  ): Promise<UserEntity | undefined> {
    return this.userRepo.findOne({
      where: [{ username }, { email }], // OR condition
    });
  }

  /**
   * Check if a user exists by username or email
   * @param username - Username
   * @param email - Email
   * @returns True if the user exists, otherwise false
   */
  async existsByUsernameOrEmail(
    username: string,
    email: string,
  ): Promise<boolean> {
    const user = await this.userRepo.findOne({
      where: [{ username }, { email }],
    });
    return !!user;
  }
}
