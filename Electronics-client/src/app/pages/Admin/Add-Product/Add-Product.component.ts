import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/DTO/Product';
import { ProductService } from 'src/app/services/ProductService/product.service';

@Component({
  selector: 'app-Add-Product',
  templateUrl: './Add-Product.component.html',
  styleUrls: ['./Add-Product.component.css'],
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  name: any;
  Description: any;
  ImgUrl: any;
  Price: any;
  Color: any;
  Storage: any;
  CPU: any;
  GPU: any;

  index: number = 0;

  constructor(private productService:ProductService) {}

  SelectedIndex(value: any) {
    this.index = value;
  }
  ngOnInit() {}

  AddProduct(
    Name: any,
    Description: any,
    Price: any,
    Color: any,
    Manufacturer: any,
    Category: any,
    ImgUrl:any
  ) {
    this.product.Name = Name;
    this.product.Description = Description;
    this.product.Price = Price;
    this.product.Color = Color;
    this.product.Category = Category;
    this.product.Manufacturer = Manufacturer;
    this.product.ImgUrl = ImgUrl;
    this.product.CpuName = this.CPU;
    this.product.GpuName = this.GPU;
    
    
    this.productService.Add(this.product).subscribe((data) => {
      console.log(data);
    });
  }

  StorageFunc(value: any) {
    this.Storage = value;
  }
  CPUFunc(value: any) {
    this.CPU = value;
  }
  GPUFunc(value: any) {
    this.GPU = value;
  }
}
