import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressDTO } from 'src/app/Models/DTO/User.Model/AddressDTO';
import { AuthService } from 'src/app/services/User/Auth/Auth.service';
import { UserService } from 'src/app/services/User/User/User.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-EditAccount',
  templateUrl: './EditAccount.component.html',
  styleUrls: ['./EditAccount.component.css']
})
export class EditAccountComponent implements OnInit {
  index: number = 0;
  EditFields:boolean = false

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
    this.userService.GetAddress(this.authService.userId()).subscribe((data:any) => {
      console.log(data);
      this.region = data.region
      this.city = data.city
      this.street = data.street
      this.number = data.number
    },(error)=>{
      this.EditFields = true
    });

  }



  ngOnInit() {
    this.GetAddress();

  }

  UpdatedAccoundDetails(username: any, email: any, fullname: any, password: any) {
    console.log(username, email, fullname, password)
  }

  UpdateAddress(region: any, city: any, street: any, number: any) {
    if(region != '' && city != '' && street != '' && number != 0){
      Swal.fire({
        title: 'Confirmation',
        text: 'Are You Sure Do You Want To Update Address',
        icon:'question',
        showDenyButton: true,
        confirmButtonText: 'Confirm',
        denyButtonText: `Decline`,
      }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          var address = new AddressDTO();
          address.City = city
          address.Number = number
          address.Region = region
          address.Street = street 
          address.UserId = this.authService.userId()
          this.userService.UpdateAddress(address).subscribe((data )=>{
            this.GetAddress();
            console.log(data)
          })
      }
    })

    }

   
   else{ Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Fields cannot be Empty',
  
    })
  }

  }

  UpdateCreditCard(cvv: any, year: any, month: any, cardHolder: any, Card1Nums: any, Card2Nums: any, Card3Nums: any, Card4Nums: any) {

    console.log(cvv, year, month, cardHolder)
  }
}
