import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, max } from 'rxjs';
import { CartDTO } from 'src/app/Models/DTO/CartDTO';
import { CartService } from 'src/app/services/CartService/Cart.service';
import { EventService } from 'src/app/services/EventService/event.service';
import { ProductService } from 'src/app/services/ProductService/product.service';
import { AuthService } from 'src/app/services/User/Auth/Auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() items: any;
  @Input() items2: any;
  @Input() Index: any;
  cart: CartDTO = new CartDTO();
  id: number = 0;
  constructor(
    private productService: ProductService,
    private CartService: CartService,
    private authService: AuthService,
    private route: Router,
    private eventService: EventService,
    private activetedroute:ActivatedRoute
    

  ) {}

  ngOnInit(): void {}

  AddToCart(item: any) {
    if (this.authService.isLoggedIn()) {
      this.cart.Product = item;
      this.cart.UserId = this.authService.userId();
      this.CartService.postProductCart(this.cart).subscribe((data) => {
        this.eventService.sendClickEventCounter();

        Swal.fire('', 'Item Added Succesfully', 'success');
      });
      // this.eventService.sendNum()
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You must login to add item',
      });
    }
  }

  NavigateToDetailes(id: any) {
    this.route.navigate(['Details/' + id]);
  }

  sort(event: any) {
    switch (event.target.value) {
      case 'Low': {
        this.items = this.items.sort(
          (low: { price: number }, high: { price: number }) =>
            low.price - high.price
        );
        break;
      }

      case 'High': {
        this.items = this.items.sort(
          (low: { price: number }, high: { price: number }) =>
            high.price - low.price
        );
        break;
      }

      case 'Name': {
        this.items = this.items.sort(function (
          low: { name: number },
          high: { name: number }
        ) {
          if (low.name < high.name) {
            return -1;
          } else if (low.name > high.name) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      }

      default: {
        this.items = this.items.sort(
          (low: { price: number }, high: { price: number }) =>
            low.price - high.price
        );
        break;
      }
    }
    return this.items;
  }

  getAll(num:any){
    this.activetedroute.params.subscribe((params)=>{
      this.id = Number(params["id"]);
      this.productService.GetAll(this.id).subscribe((data)=>{
        this.items = data
        this.items = this.items.slice(0,num);
      }
      )
      console.log(this.id)
  
    })
  
  }

  async FilterMax(event: any) {
    
    switch (event.target.value) {
    case "10": {
      this.getAll(10)
      break;
    }
    case "20": {
      this.getAll(20)
      break;
    }
    case "30": {
      this.getAll(30)
      break;
    }
    case "40": {
      this.getAll(40)
      break;
    }
    case "": {
      this.getAll(999)
      break;
    }
  }
  
  
  
  
  
  
  
  
  
  
  
   }
}
