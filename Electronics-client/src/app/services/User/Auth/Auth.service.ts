import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Models/DTO/User.Model/IUser';
import { LoginModel } from 'src/app/Models/DTO/User.Model/LoginModel';
import { RegisterModel } from 'src/app/Models/DTO/User.Model/RegisterModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BaseUrl:string = "https://localhost:7157/api/";

  IsLoggedIn: boolean = false;
  
  currentUser: IUser = {
    username:'' ,
    email: ''
  };

  constructor(private http:HttpClient
    ,private router:Router) { }


    Login(model:LoginModel){
      this.http.post(this.BaseUrl+'User/Login',model).subscribe((data:any)=>
        {
          localStorage.setItem('Authorization', data.token)
          localStorage.setItem('UserId', data.userid)
          localStorage.setItem('Username', data.username)
          if (data.username!= ''){
            this.IsLoggedIn = true;
            this.router.navigate([''])
            console.log(data)
          }
        });
    }
    
    Register(model:RegisterModel){
      this.http.post(this.BaseUrl + 'User/Register',model).subscribe(()=>{});
    }
    
    
    Logout(){
      localStorage.removeItem('Authorization')
      localStorage.removeItem('UserId')
      localStorage.removeItem('Username')
      this.IsLoggedIn = false;
      this.router.navigate(['Login'])
    }
    
    isLoggedIn(){
       return localStorage.getItem('Authorization') != null;
    }
    userId(){
      return localStorage.getItem('UserId')!;
    }
    Username(){
      return localStorage.getItem('Username')!;
    }

}
