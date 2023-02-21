import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangePasswordDTO } from 'src/app/Models/DTO/User.Model/ChangePasswordDTO';
import { AuthService } from '../Auth/Auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  BaseUrl: string = "https://localhost:7157/api/User/";
  constructor(private http: HttpClient, private authService: AuthService) { }
  get Id() {
    return this.authService.userId();
  }
  GetAll() {
    console.log(this.Id)
    return this.http.get(this.BaseUrl + this.Id);
  }


  GetAddress(userId: any) {
    return this.http.get(this.BaseUrl + 'AddressUser?UserId=' + userId)
  }

  GetCreditcard() {
    return this.http.get(this.BaseUrl + '')
  }

  GetAccountDetails(UserId:any) {
    return this.http.get(this.BaseUrl + 'GetAccountDetails?UserId=' + UserId)
  }

  UpdateAddress(address: any) {
    return this.http.post(this.BaseUrl + 'AddAddress', address)
  }

  UpdateCreditCard(creditCard: any) {
    return this.http.post(this.BaseUrl + 'AddCreditCard', creditCard)
  }

  UpdateAccountDetails(accountDetails:any){
    return this.http.post(this.BaseUrl + 'AddAccountDetails', accountDetails)
  }

  UpdatePassword(NewPassword:any){
return this.http.post(this.BaseUrl + 'ChangePassword', NewPassword)
  }
}
