import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http : HttpClient) { }

  url = 'http://localhost:3000/personalForm'

  userPersonal(data : any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url , data )
  }

}
