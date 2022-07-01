import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from 'rxjs/operators';
import { RequestService } from "src/services/request.service";

@Injectable()
export class RequestInterceptor implements NestInterceptor {
    private readonly logger = new Logger(RequestInterceptor.name);
    
    constructor(private readonly requestService:RequestService){}

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        
        this.requestService.setRequestTime(Date.now());//intercept request and record request time 

        return next.handle().pipe(
            tap((res) => {           
                const req = context.switchToHttp().getRequest();
                this.logger.debug(`Request Client: ${req.get('user-agent')}`);
                this.logger.debug(`Response: ${res}`);
                this.logger.log(`Request timestamp: ${this.requestService.getRequestTime()}`);
            }),
            catchError((err) => {
              this.logger.error(err);
              return throwError(() => err);
            }),
          );
    }
    
}