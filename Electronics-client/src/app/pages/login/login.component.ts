import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/Models/DTO/User.Model/LoginModel';
import { AuthService } from 'src/app/services/User/Auth/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  LoginFun(username:string,password:string){
    
    var model = new LoginModel();
    model.Username = username;
    model.Password = password;
    this.authService.Login(model);
    
  }
}
