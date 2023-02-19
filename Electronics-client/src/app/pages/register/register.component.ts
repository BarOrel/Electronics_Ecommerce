import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/Models/DTO/User.Model/RegisterModel';
import { AuthService } from 'src/app/services/User/Auth/Auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authSerice:AuthService) { }

  ngOnInit(): void {
  }



  Register(username:any,email:any,fullname:any,password:any,confirmPassword:any){
    var model = new RegisterModel();
    model.Email = email
    model.FirstName = fullname
    model.Password = password
    model.Username = username
    model.LastName = fullname
    
    if(model.Email != '',model.FirstName != '',model.LastName != '',model.Password != ''){
      if(password == confirmPassword){
  
        this.authSerice.Register(model);
      
      }
      else{
        Swal.fire({
  
          icon: 'error',
          title: 'Oops...',
          text: 'Password Does Not Match',
      
        })
      }







    }

    else{ 
      Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Fields Cannot Be Empty',
  
    })

    }


  }
}
