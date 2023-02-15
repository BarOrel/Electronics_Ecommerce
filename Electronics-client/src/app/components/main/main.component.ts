import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartDTO } from 'src/app/Models/DTO/CartDTO';
import { CartService } from 'src/app/services/CartService/Cart.service';
import { EventService } from 'src/app/services/EventService/event.service';
import { ProductService } from 'src/app/services/ProductService/product.service';
import { AuthService } from 'src/app/services/User/Auth/Auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
dicounted1: any;
dicounted2: any;
mobilePhones: any;
gamingConsole: any;
cart: CartDTO = new CartDTO;

  constructor(private productService:ProductService
    ,private route:Router,private authService:AuthService
    ,private cartService:CartService,private eventService:EventService) { }

  ngOnInit(): void {
    this.productService.GetHome().subscribe((data:any)=>{
      this.dicounted1 = data.discountedProducts1
      this.dicounted2 = data.discountedProducts2
      this.mobilePhones = data.mobilePhones
      this.gamingConsole = data.gamingConsoles
      console.log(data)
    })
  }




  AddToCart(item: any) {
    if (this.authService.isLoggedIn()) {
      this.cart.Product = item
      this.cart.UserId = this.authService.userId();
      this.cartService.postProductCart(this.cart).subscribe((data) => {
        this.eventService.sendClickEventCounter();
        
        Swal.fire(
          '',
          'Item Added Succesfully',
          'success'
        )
      })
      // this.eventService.sendNum()
    }
    else { 
      Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You must login to add item',
  
    })}
  }
  
  NavigateToDetailes(id: any) {
    this.route.navigate(["Details/"+id])
    
  }

  
}
