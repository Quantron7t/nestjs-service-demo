import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class AppService {

  constructor(private readonly userService:UserService){}

  getCurrentUser(): string {
    return `UserID ${this.userService.getUserId()}`;
  }
}
