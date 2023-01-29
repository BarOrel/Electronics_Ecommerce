import { ConstantPool } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router,Event } from '@angular/router';
import { Product } from 'src/app/Models/DTO/Product';
import { ProductService } from 'src/app/services/ProductService/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  list:any;
  id:Number = 0;
  showLoadingIndicator = true;
  
  constructor(private route:ActivatedRoute, private router:Router,private productService:ProductService) {}
   

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id = Number(params["id"]);
      this.productService.GetAll(this.id).subscribe((data)=>{
        this.list = data
        
      }
      )
      console.log(this.id)
  
    })
  }

}
