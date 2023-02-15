import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartDTO } from 'src/app/Models/DTO/CartDTO';
import { CartService } from 'src/app/services/CartService/Cart.service';
import { EventService } from 'src/app/services/EventService/event.service';
import { ProductService } from 'src/app/services/ProductService/product.service';
import { AuthService } from 'src/app/services/User/Auth/Auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number = 0;
  Data:any;
  constructor(private route:ActivatedRoute,private productService:ProductService,private authService:AuthService,private CartService:CartService,private eventService:EventService) { }
  cart: CartDTO = new CartDTO;

  ngOnInit():void {

      this.route.params.subscribe((params)=>{
      this.id = Number(params["id"]);
  
      this.productService.GetProduct(this.id).subscribe((data)=>{
        this.Data = data
      })
      
      
    })


  }

  AddToCart(item: any) {
    if (this.authService.isLoggedIn()) {
      if (this.authService.isLoggedIn()) {
        this.cart.Product = item
        this.cart.UserId = this.authService.userId();
        this.CartService.postProductCart(this.cart).subscribe((data) => {
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
  }

}
