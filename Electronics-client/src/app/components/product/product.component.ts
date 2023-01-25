import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/ProductService/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  List:any;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.GetAll().subscribe((data)=>{
      this.List = data
    }
    )
  }

}
