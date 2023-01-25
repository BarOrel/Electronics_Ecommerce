import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
BaseUrl = 'https://localhost:7157/api/Product/'

constructor(private http:HttpClient) { }



GetAll(){
  return this.http.get(this.BaseUrl);
}

Add(product:any){
  return this.http.post(this.BaseUrl , product);
}




}

