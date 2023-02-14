import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/CartService/Cart.service';
import { EventService } from 'src/app/services/EventService/event.service';
import { AuthService } from 'src/app/services/User/Auth/Auth.service';

@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {
  list:any = [];
  Counter:any;
  Price:number =0;
  constructor(private authService:AuthService,private cartService:CartService, private event:EventService) { }

  ngOnInit() {
    this.GetCounter()
  
  }

  GetCounter(){
    this.cartService.getCart(this.authService.userId()).subscribe((data) =>
    {
      this.list = data    
    });
  }
  Load(){
    // this.cartService.getPrice(this.authService.userId()).subscribe((data)=>{this.Counter = data})
    this.cartService.getCart(this.authService.userId()).subscribe((data) =>
    {
      console.log(data)
      this.list = data    
    });
  }



   RemoveProduct(item:any){
    
      console.log(item);
      this.cartService.RemoveProduct(item).subscribe(()=>{
        this.event.sendClickEventCounter()
        this.GetCounter()
      });

  
  }

}
