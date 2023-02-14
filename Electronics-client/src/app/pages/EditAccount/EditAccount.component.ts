import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/User/Auth/Auth.service';

@Component({
  selector: 'app-EditAccount',
  templateUrl: './EditAccount.component.html',
  styleUrls: ['./EditAccount.component.css']
})
export class EditAccountComponent implements OnInit {
  index:number = 0;
  
  constructor(private authService:AuthService,private active:ActivatedRoute) { 
    this.active.params.subscribe((params)=>{
      this.index = Number(params["id"]);
  })
  }
  ngOnInit() {
    
  }

  UpdateAddress(){}

  UpdateCreditCard(cvv:any,year:any,month:any,cardHolder:any,Card1Nums:any,Card2Nums:any,Card3Nums:any,Card4Nums:any){

    console.log(cvv,year,month,cardHolder)
  }
}
