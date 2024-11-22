import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { setupSwagger } from './swagger/swagger.setup';
import { LoggerService } from "./logger/logger.service";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [
    ConfigModule,
  ],
  providers:[DatabaseModule,LoggerService,],
  exports:[DatabaseModule,LoggerService,],
})
export class CoreModule {
  static configureSwagger(app: any): void {
    setupSwagger(app);
  }
}
