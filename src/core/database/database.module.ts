import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                return {
                    type: configService.get<'postgres'| 'mysql'| 'sqlite'| 'mariadb'>('database.type'),
                    host: configService.get<string>('database.host'),
                    port: parseInt(configService.get<string>('database.port'), 10),
                    username: configService.get<string>('database.username'),
                    password: configService.get<string>('database.password'),
                    database: configService.get<string>('database.database'),
                    entities: [
                        __dirname + '../../../**/*.entity{.ts,.js}',
                    ],
                    synchronize: configService.get<string>('app.node_env') != 'production',
                }
            },
        }),
    ],
})
export class DatabaseModule {}
