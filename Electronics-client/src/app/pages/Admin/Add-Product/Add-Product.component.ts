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
  Storage: any;
  Color:any;
  CPU: any;
  CPUType: any;
  GPU: any;
  GPUType: any;


  //Oshri added for mobile phone
  Inch: any;
  Miliamper: any;
  Resolution: any;
  OperationSystem: any;
  //

  index: number = 99;

  constructor(private productService: ProductService) { }

  SelectedIndex(value: any) {
    this.index = value;
  }
  ngOnInit() { }

  AddProduct(
    Name: any,
    Description: any,
    Price: any,
    Manufacturer: any,
    Category: any,
    ImgUrl: any,
    Date: any

  ) {
    this.product.Name = Name;
    this.product.Description = Description;
    this.product.Price = Price;
    this.product.Category = Category;
    this.product.ReleaseDate = Date;
    this.product.Manufacturer = Manufacturer;
    this.product.ImgUrl = ImgUrl;
    this.product.Color = this.Color;
    this.product.Storage = this.Storage
    this.product.CpuType = this.CPUType
    this.product.GpuType = this.GPUType
    this.product.CpuName = this.CPU;
    this.product.GpuName = this.GPU;

    //oshri added for mobile phone
    this.product.Inch = this.Inch
    this.product.MilliampHours = this.Miliamper
    this.product.Resolution = this.Resolution
    this.product.OperationSystem = this.OperationSystem
    //


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
  CpuTypeFunc(value: any) {
    this.CPUType = value;
  }
  GpuTypeFunc(value: any) {
    this.GPUType = value;
  }
  SelectedColor(value: any) {
    this.Color = value;
  }

  //oshri added for mobile phone
  //inch func
  InchFunc(value: any) {
    this.GPUType = value;
  }
  //Miliamper func
  MiliamperFunc(value: any) {
    this.GPUType = value;
  }
  //func OperationSystemFunc
  OperationSystemFunc(value: any) {
    this.GPUType = value;
  }
  //func ResolutionFunc
  ResolutionFunc(value: any) {
    this.GPUType = value;
  }
  //



}
