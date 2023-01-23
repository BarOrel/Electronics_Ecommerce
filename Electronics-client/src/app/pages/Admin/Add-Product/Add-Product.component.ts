import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Add-Product',
  templateUrl: './Add-Product.component.html',
  styleUrls: ['./Add-Product.component.css']
})
export class AddProductComponent implements OnInit {
  index:number = 0;
  constructor() { }
 
  
  SelectedIndex(value:any) {
    this.index = value
  }
  ngOnInit() {
  }

}
