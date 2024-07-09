import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { UserModule } from './modules/user.module';
import { HttpExceptionFilter } from 'utils/error/http-exception.filter';
import { DatabaseModule } from './modules/utils/database.module';
import { AppConfigModule } from './modules/utils/config.module';
@Module({
  imports: [UserModule, DatabaseModule, AppConfigModule], //TODO: Find a better way like BaseModule or sum like that
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    }
  ]
})
export class AppModule {}
