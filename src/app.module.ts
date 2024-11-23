import { Module } from '@nestjs/common';
import { ConfigSetupModule } from "./configs/config.module";
import { CoreModule } from "./core/core.module";
import { AuthModule } from "./modules/auth/auth.module";
import { UserModule } from "./modules/user/user.module";

@Module({
  imports: [
    ConfigSetupModule,
    CoreModule,
    UserModule,
    AuthModule,
  ],
  providers: [],

})
export class AppModule {}
