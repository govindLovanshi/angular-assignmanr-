import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user_interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private API_BASE_PATH : string = 'http://localhost:4200/api/';

  constructor(private _httpServer  : HttpClient ) { }

  // getUsers(){
  //   console.log("getUsers is called")
  //   return this._httpServer.get(this.API_BASE_PATH +"users");
  // }

  // adduserDetails(user : User){
  //   console.log("addUser is called")
  //   return this._httpServer.post( `${this.API_BASE_PATH}User/` , user )
  
  //  }

}
