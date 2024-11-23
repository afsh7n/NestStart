import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './database.config';
import appConfig from './app.config';
import swaggerConfig from './swagger.config';
import jwtConfig from './jwt.config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [databaseConfig, appConfig,swaggerConfig,jwtConfig],
        }),
    ],
})
export class ConfigSetupModule {}
