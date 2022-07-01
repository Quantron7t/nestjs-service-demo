import { MiddlewareConsumer, Module, NestModule, Scope } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { RequestInterceptor } from './interceptor/request.interceptor';
import { UserMiddleware } from './middlewares/user.middleware';
import { AppService } from './services/app.service';
import { RequestService } from './services/request.service';
import { UserService } from './services/user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    UserService,
    RequestService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   scope: Scope.REQUEST,
    //   useClass: RequestInterceptor
    // }
  ]
})
export class AppModule implements NestModule{ 
  //class is extended by NestModule to apply middleware to incoming requests 
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes('*'); //applies auth middleware for all requests
  }
}
