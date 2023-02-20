import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/User/Auth/Auth.service';
import { UserService } from 'src/app/services/User/User/User.service';

@Component({
  selector: 'app-EditAccount',
  templateUrl: './EditAccount.component.html',
  styleUrls: ['./EditAccount.component.css']
})
export class EditAccountComponent implements OnInit {
  index: number = 0;

  constructor(private authService: AuthService, private active: ActivatedRoute, private userService: UserService) {
    this.active.params.subscribe((params) => {
      this.index = Number(params["id"]);
    })
  }
  region: any;
  city: any;
  street: any;
  number: any;

  GetAddress() {
    this.userService.GetAddress(this.authService.userId()).subscribe((data) => {
      console.log(data);

    },(err) => 
    {   
      if(err.status == 400){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Username or Password is incorrect',
      
        })
      }


  ngOnInit() {
    this.GetAddress();
  }

  UpdatedAccoundDetails(username: any, email: any, fullname: any, password: any) {
    console.log(username, email, fullname, password)
  }

  UpdateAddress(region: any, city: any, street: any, number: any) {
  }

  UpdateCreditCard(cvv: any, year: any, month: any, cardHolder: any, Card1Nums: any, Card2Nums: any, Card3Nums: any, Card4Nums: any) {

    console.log(cvv, year, month, cardHolder)
  }
}
