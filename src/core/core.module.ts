import { Module } from '@nestjs/common';
import { setupSwagger } from './swagger/swagger.setup';
import { LoggerService } from "./logger/logger.service";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [
    DatabaseModule
  ],
  providers:[LoggerService,],
  exports:[LoggerService,],
})
export class CoreModule {
  static configureSwagger(app: any): void {
    setupSwagger(app);
  }
}
