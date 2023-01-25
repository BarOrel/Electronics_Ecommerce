import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DesktopPC } from 'src/app/Models/DTO/DesktopPC';
import { Product } from 'src/app/Models/DTO/Product';

@Component({
  selector: 'app-Add-DesktopPC',
  templateUrl: './Add-DesktopPC.component.html',
  styleUrls: ['./Add-DesktopPC.component.css']
})
export class AddDesktopPCComponent implements OnInit {
  @Input() product?:Product
  @Output() add:EventEmitter<any> = new EventEmitter<any>();
  selectedStorage:any;
  selectedCPU:any;
  selectedGPU:any;
  desktopPC:DesktopPC = new DesktopPC;
  
  
  constructor() { }
  
  
  SelectedStorage(value:any) {
    this.selectedStorage = value;
    console.log(value)
  }
  SelectedGPU(arg0: string) {
    this.selectedGPU = arg0;
    console.log(arg0)
  }
  SelectedCPU(arg0: string) {
    this.selectedCPU = arg0;
    console.log(arg0)
  }

  ngOnInit() {
  }

}
