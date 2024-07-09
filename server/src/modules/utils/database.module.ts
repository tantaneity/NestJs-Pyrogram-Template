import 'reflect-metadata'
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { UserEntity } from 'src/models/entities/user.entity';

@Module({
    imports: [TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => {
            const dbConfig: TypeOrmModuleOptions = {
                type: 'postgres',
                host: configService.get<string>('DB_HOST'),
                port: configService.get<number>('DB_PORT'),
                username: configService.get<string>('DB_USERNAME'),
                password: configService.get<string>('DB_PASSWORD'),
                database: configService.get<string>('DB_NAME'),
                entities: [UserEntity],
                synchronize: true,
                cache: true
            };
            return dbConfig
        },
        inject: [ConfigService]
    })]
})
export class DatabaseModule {}