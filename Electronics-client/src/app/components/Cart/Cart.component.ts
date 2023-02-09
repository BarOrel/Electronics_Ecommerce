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
  Price:number =0;
  constructor(private authService:AuthService,private cartService:CartService) { }

  ngOnInit() {
    this.Load()
  
  }

  Load(){
    this.cartService.getCounter(this.authService.userId()).subscribe((data)=>{this.Counter = data})
    this.cartService.getCart(this.authService.userId()).subscribe((data) =>
    {
      console.log(data)
      this.list = data
     
      this.list.forEach((item: { price: number; }) => {
        this.Price = item.price + this.Price 
        
      });
     
    });
  }



   RemoveProduct(item:any){
    
      console.log(item);
      this.cartService.RemoveProduct(item).subscribe(()=>{
        this.Load()
      });

  
  }

}
