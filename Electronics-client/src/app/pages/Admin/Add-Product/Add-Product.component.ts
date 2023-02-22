import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/DTO/Product';
import { ProductService } from 'src/app/services/ProductService/product.service';
import { AuthService } from 'src/app/services/User/Auth/Auth.service';
import Swal from 'sweetalert2';

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
  Panel:any;
  //
  index: number = 99;
  sizemm:any;

  constructor(private productService: ProductService,private authService:AuthService,private route:Router) { }

  SelectedIndex(value: any) {
    this.index = value;
  }
  ngOnInit() {
    if(this.authService.isAdmin() == 'false'){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Account Does Not Have Access Here',
    
      })
      this.route.navigate([''])
    }
   }

  AddProduct(
    Name: any,
    Description: any,
    Price: any,
    color:any,
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
    // this.product.Color = color;
    this.product.Manufacturer = Manufacturer;
    this.product.ImgUrl = ImgUrl;
    this.product.Color = this.Color;
    this.product.Storage = this.Storage
    this.product.CpuType = this.CPUType
    this.product.GpuType = this.GPUType
    this.product.CpuName = this.CPU;
    this.product.GpuName = this.GPU;
    this.product.SizeMM = this.sizemm;
    
    //oshri added for mobile phone
    this.product.Inch = this.Inch
    this.product.MilliampHours = this.Miliamper
    this.product.Resolution = this.Resolution
    this.product.OperationSystem = this.OperationSystem
    //
    //for laptop
    this.product.Panel = this.Panel
//

    this.productService.Add(this.product).subscribe((data) => {
      console.log(data);
    });
  }

  StorageFunc(value: any) {this.Storage = value;  }
  CPUFunc(value: any) { this.CPU = value; }
  GPUFunc(value: any) { this.GPU = value; }
  CpuTypeFunc(value: any) { this.CPUType = value; }
  GpuTypeFunc(value: any) { this.GPUType = value; }


  //oshri added for mobile phone
  //inch func
  InchFunc(value: any) {  this.Inch = value;}
  //Miliamper func
  MiliamperFunc(value: any) {  this.Miliamper = value;}
  //func OperationSystemFunc
  OperationSystemFunc(value: any) {  this.OperationSystem = value;}
  //func ResolutionFunc
  ResolutionFunc(value: any) { this.Resolution = value;}
  //
  //for laptop
  PanelFunc(value: any) { this.Panel = value; }

  SelectedColor(Color:any){this.Color = Color}
//

SizemmFunc(value: any) {this.sizemm = value }
}
