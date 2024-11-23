import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { UserEntity } from "./entities/user.entity";
import { UserRepository } from "./repositories/user.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [UserController],
  providers: [UserService,UserRepository],
  exports: [UserService,UserRepository],
})
export class UserModule {}
