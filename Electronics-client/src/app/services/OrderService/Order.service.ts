import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
private baseurl:string ='https://localhost:7157/api/Order' 
constructor(private http:HttpClient) { }




postOrder(userId:any){
  return this.http.get(this.baseurl+"/UserId?UserId="+ userId);
  }












}

