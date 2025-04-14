import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './users/user.entity';
// import { Report } from './reports/report.entity';
import * as process from 'node:process';
import * as morgan from 'morgan';

const cookieSession = require('cookie-session');
const ormConfig = require('../ormconfig.js');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRoot(ormConfig),
    // TypeOrmModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => ({
    //     type: 'sqlite',
    //     database: config.get<string>('DB_NAME'),
    //     entities: [User, Report],
    //     synchronize: true,
    //   }),
    // }),
    ReportsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({ whitelist: true }),
    },
  ],
})
export class AppModule {
  constructor(private configService: ConfigService) {}
  configure(consumer: MiddlewareConsumer) {
    const middlewares = [
      cookieSession({
        keys: [this.configService.get<string>('COOKIE_SECRET')],
      }),
    ];

    if (process.env.NODE_ENV === 'development') middlewares.push(morgan('dev'));

    consumer.apply(...middlewares).forRoutes('*');
  }
}
