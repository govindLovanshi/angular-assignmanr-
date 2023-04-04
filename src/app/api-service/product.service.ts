import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:3000/productForm'


  constructor(private http : HttpClient) { }

  userProduct(data : any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json' ,);
    return this.http.post(this.url , data )
  }
}
