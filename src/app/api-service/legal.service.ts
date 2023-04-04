import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LegalService {
  url = 'http://localhost:3000/legalForm'

  constructor(private http : HttpClient) { }

  userLegal(data : any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url , data )
  }
}
