import { Module } from '@nestjs/common';
import {ConfigSetupModule} from "./configs/config.module";
import {DatabaseModule} from "./core/database/database.module";

@Module({
  imports: [
    ConfigSetupModule,
    DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
