import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
BaseUrl = 'https://localhost:7157/api/Product/'

constructor(private http:HttpClient) { }

GetHome(){
  return this.http.get(this.BaseUrl +'GetProductsHome');
}

GetAll(index:any){
  return this.http.get(this.BaseUrl + index);
}

Add(product:any){
  return this.http.post(this.BaseUrl , product);
}

GetProduct(index:any){
  return this.http.get(this.BaseUrl+"Details/" + index);
}


}

