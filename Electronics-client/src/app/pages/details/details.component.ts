import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartDTO } from 'src/app/Models/DTO/CartDTO';
import { CategoryEnum } from 'src/app/Models/DTO/CategoryEnum';
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
  Data: any;
  list: any;

  constructor(private route: ActivatedRoute, private productService: ProductService, private authService: AuthService, private CartService: CartService, private eventService: EventService) { }
  cart: CartDTO = new CartDTO;

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.id = Number(params["id"]);

      this.productService.GetProduct(this.id).subscribe((data) => {
        this.Data = data
        this.productService.GetAll(this.Data.category).subscribe((data) => {
          this.list = data
          console.log(data)
        })
        console.log(data)
      })


    })


  }

  AddToCart(item: any) {

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

      })
    }

  }


  isGamingConsole(value: any) {
    if (value == CategoryEnum.VideoGame_Console) {
      console.log("yes")
    }
  }

}
