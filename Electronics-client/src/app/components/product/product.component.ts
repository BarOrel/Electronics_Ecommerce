import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { CartDTO } from 'src/app/Models/DTO/CartDTO';
import { CartService } from 'src/app/services/CartService/Cart.service';
import { EventService } from 'src/app/services/EventService/event.service';
import { ProductService } from 'src/app/services/ProductService/product.service';
import { AuthService } from 'src/app/services/User/Auth/Auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() item: any;
  @Input() Index: any;
  cart: CartDTO = new CartDTO;
  constructor(private productService: ProductService, private CartService: CartService, private authService: AuthService,
    private route:Router,
    private eventService: EventService) { }

  ngOnInit(): void {

  }

  AddToCart(item: any) {
    if (this.authService.isLoggedIn()) {

      this.cart.Product = item
      this.cart.UserId = this.authService.userId();
      this.CartService.postProductCart(this.cart).subscribe((data) => {
        this.eventService.sendClickEventCounter();
        
      })
      // this.eventService.sendNum()
    }
    else { alert("Pls Login First") }
  }

  NavigateToDetailes(id: any) {
    this.route.navigate(["Details/"+id])
  }
}
