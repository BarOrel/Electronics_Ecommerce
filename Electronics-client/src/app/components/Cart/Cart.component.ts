import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { count } from 'rxjs';
import { EditAccountComponent } from 'src/app/pages/EditAccount/EditAccount.component';
import { CartService } from 'src/app/services/CartService/Cart.service';
import { EventService } from 'src/app/services/EventService/event.service';
import { OrderService } from 'src/app/services/OrderService/Order.service';
import { AuthService } from 'src/app/services/User/Auth/Auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {
Order() {
  Swal.fire({
    title: 'Confirm The Order',
    text: 'Price : '+this.Price+'$',
    icon:'question',
    showDenyButton: true,
    confirmButtonText: 'Confirm',
    denyButtonText: `Decline`,
  }).then(async (result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      
         this.orderService.postOrder(this.authService.userId()).subscribe((data:any)=>{
          this.GetCounter()
          this.Load()
    
      },(err) => 
      {
        if(err.error == "NoItems"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Cart is empty , Please Add items!',
          })

        }
        if(err.error == "NoCreditCard"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Credit Card is empty , Enter your Credit Card!',
          })

          this.router.navigate(["EditAccount/2"])
        }
    
        if(err.error == "NoAddress"){
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Address is empty , Enter your Address!',
          })
          this.router.navigate(["EditAccount/1"])
        }
    
      });
      Swal.fire('Order Confirmed!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Order has been Declined', '', 'error')
    }
  })
  
  

  
}
  list:any = [];
  Counter:any;
  Price:number =0;
  constructor(private authService:AuthService,private orderService:OrderService,private cartService:CartService, private event:EventService,private router:Router) { }

  ngOnInit() {
    this.GetCounter()
    this.Load()
  
  }

  GetCounter(){
    this.cartService.getCounter(this.authService.userId()).subscribe((data) =>
    {
      this.Counter = data    
    });
  }
  Load(){
    // this.cartService.getPrice(this.authService.userId()).subscribe((data)=>{this.Counter = data})
    this.cartService.getCart(this.authService.userId()).subscribe((data:any) =>
    {
      console.log(data)
      this.list = data.products    
      this.Price = data.finalPrice
    });
  }



   RemoveProduct(item:any){
    
      console.log(item);
      this.cartService.RemoveProduct(item).subscribe(()=>{
        this.Load()
        this.event.sendClickEventCounter()
       
      });

  
  }

}
