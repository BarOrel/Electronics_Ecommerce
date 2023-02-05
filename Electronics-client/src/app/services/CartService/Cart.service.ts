import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private baseurl:string ='https://localhost:7157/api/Cart/' 
itemCounter:number = 0 ;
constructor(private http:HttpClient) {

 }



getCart(UserId:any){
  return this.http.get(this.baseurl + UserId);
}


RemoveProduct(item:any){
  return this.http.delete(this.baseurl + item);
}

postProductCart(product:any){
return this.http.post(this.baseurl, product);
}


getCounter(UserId:any){
  return this.http.get(this.baseurl+ "GetCounter/" + UserId);


}
}
