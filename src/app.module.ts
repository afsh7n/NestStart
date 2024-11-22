import { Module } from '@nestjs/common';
import {ConfigSetupModule} from "./configs/config.module";
import { CoreModule } from "./core/core.module";

@Module({
  imports: [
    ConfigSetupModule,
    CoreModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
