import { Controller, Get, HttpStatus, Param, UseGuards } from "@nestjs/common";
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { UserService } from '../services/user.service';
import { JwtAuthGuard } from '../../auth/guards/jwt.guard';
import { User } from '../interfaces/user.interface';
import { SwaggerStatusEnum, SwaggerTagsEnum } from "../../../common/enums/swagger.enum";

@ApiTags(SwaggerTagsEnum.USERS)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Get all users (requires authentication)
   */
  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: SwaggerStatusEnum.OK,
  })
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  /**
   * Get a single user by ID (requires authentication)
   * @param id - User ID
   */
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: SwaggerStatusEnum.OK,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: SwaggerStatusEnum.NOT_FOUND,
  })
  async findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOneById(id);
  }
}
