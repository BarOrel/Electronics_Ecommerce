import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { EventService } from 'src/app/services/EventService/event.service';
import { ProductService } from 'src/app/services/ProductService/product.service';
import { AuthService } from 'src/app/services/User/Auth/Auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() item: any ;
  @Input() Index: any ;
  
  constructor(private productService:ProductService,private eventService:EventService,private authService:AuthService) { }

  ngOnInit(): void {
   
  }

  AddToCart(item:any){
    if(this.authService.isLoggedIn()){
    console.log(item)}
    else {alert("Pls Login First")}
  }
}
