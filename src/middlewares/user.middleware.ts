import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';
import { UserService } from "src/services/user.service";

@Injectable()
export class UserMiddleware implements NestMiddleware{

    private readonly logger = new Logger(UserMiddleware.name);

    //User service to be injected by app module providers
    constructor(private readonly userService : UserService) { }

    use(req: Request, res: Response, next: NextFunction) {
        this.logger.log(req.header('user-id'));
        this.userService.setUserId(req.header('user-id'));
        next();
    }    
}