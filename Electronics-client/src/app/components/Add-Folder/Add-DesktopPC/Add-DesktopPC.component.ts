import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DesktopPC } from 'src/app/Models/DTO/DesktopPC';
import { Product } from 'src/app/Models/DTO/Product';

@Component({
  selector: 'app-Add-DesktopPC',
  templateUrl: './Add-DesktopPC.component.html',
  styleUrls: ['./Add-DesktopPC.component.css']
})
export class AddDesktopPCComponent implements OnInit {
  
  @Output() Storage:EventEmitter<any> = new EventEmitter<any>();
  @Output() GPU:EventEmitter<any> = new EventEmitter<any>();
  @Output() CPU:EventEmitter<any> = new EventEmitter<any>();
  @Output() CPUType:EventEmitter<any> = new EventEmitter<any>();
  @Output() GPUType:EventEmitter<any> = new EventEmitter<any>();


  constructor() { }
  
  
  SelectedCPUType(value:any){this.CPUType.emit(value)}

  SelectedGPUType(value:any){this.GPUType.emit(value)}

  SelectedStorage(value:any){this.Storage.emit(value) }

  SelectedGPU(value: any){this.GPU.emit(value)}

  SelectedCPU(value: any){this.CPU.emit(value)}
  
  ngOnInit() {
  }

}
