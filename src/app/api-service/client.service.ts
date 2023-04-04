import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url = 'http://localhost:3000/clientForm'
  constructor(private http : HttpClient) { }

  userClient(data : any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json'  );
    return this.http.post(this.url , data, {headers: headers})
  }

}
