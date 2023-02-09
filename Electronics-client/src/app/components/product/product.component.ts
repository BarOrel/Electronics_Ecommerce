import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { CartDTO } from 'src/app/Models/DTO/CartDTO';
import { CartService } from 'src/app/services/CartService/Cart.service';
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
  constructor(private productService: ProductService, private CartService: CartService, private authService: AuthService,) { }

  ngOnInit(): void {

  }

  AddToCart(item: any) {
    if (this.authService.isLoggedIn()) {

      this.cart.Product = item
      this.cart.UserId = this.authService.userId();
      this.CartService.postProductCart(this.cart).subscribe((data)=>{
        alert("Item Added Succesfully")
      })

    }
    else { alert("Pls Login First") }
  }
}
