import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private baseurl:string ='https://localhost:7157/api/Cart/' 

constructor(private http:HttpClient) {

 }



getCart(){

}

postProductCart(product:any){
return this.http.post(this.baseurl, product);
}


}

