import { Injectable, Scope } from "@nestjs/common";

// by default nest applies singleton, 
// scope 'Request' will create new service for each request 
@Injectable({scope: Scope.REQUEST}) 
export class UserService {
    private userId : string;
    
    setUserId = (id : string) => this.userId=id; 
    getUserId = () : string => { return this.userId };
}