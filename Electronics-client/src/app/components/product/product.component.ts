import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { EventService } from 'src/app/services/EventService/event.service';
import { ProductService } from 'src/app/services/ProductService/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() item: any ;
  @Input() Index: any ;

  constructor(private productService:ProductService,private eventService:EventService) { }

  ngOnInit(): void {
   
  }

  AddToCart(item:any){
    console.log(item)
  }
}
