import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/CartService/Cart.service';
import { AuthService } from 'src/app/services/User/Auth/Auth.service';

@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {
  list:any = [];
  Counter:any;
  constructor(private authService:AuthService,private cartService:CartService) { }

  ngOnInit() {
    this.LoadCounter();
     this.cartService.getCart(this.authService.userId()).subscribe((data) =>
    {
      console.log(data)
      this.list = data

    });
  }

  LoadCounter(){
    this.cartService.getCounter(this.authService.userId()).subscribe((data)=>{this.Counter = data})

  }



   RemoveProduct(item:any){
    
      console.log(item);
      this.cartService.RemoveProduct(item).subscribe(()=>{
        this.cartService.getCart(this.authService.userId()).subscribe((data) =>
          {
              console.log(data)
              this.list = data
              this.LoadCounter();


           });

      });

  
  }

}
