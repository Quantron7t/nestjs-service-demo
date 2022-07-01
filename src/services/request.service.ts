import { Injectable, Scope } from "@nestjs/common";

// by default nest applies singleton, 
// scope 'Request' will create new service for each request 
@Injectable({scope: Scope.REQUEST}) 
export class RequestService {
    private requestTimeStamp : number;
    
    setRequestTime = (epochTime : number) => this.requestTimeStamp=epochTime; 
    getRequestTime = ():number => this.requestTimeStamp; 
}