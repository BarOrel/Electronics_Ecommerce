import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-Add-Laptop',
  templateUrl: './Add-Laptop.component.html',
  styleUrls: ['./Add-Laptop.component.css']
})
export class AddLaptopComponent implements OnInit {

  constructor() { }

  //oshri added
  @Output() Storage: EventEmitter<any> = new EventEmitter<any>();
  @Output() GPU: EventEmitter<any> = new EventEmitter<any>();
  @Output() CPU: EventEmitter<any> = new EventEmitter<any>();
  @Output() CPUType: EventEmitter<any> = new EventEmitter<any>();
  @Output() GPUType: EventEmitter<any> = new EventEmitter<any>();
  @Output() InchSize: EventEmitter<any> = new EventEmitter<any>();
  @Output() Resolution: EventEmitter<any> = new EventEmitter<any>();
  @Output() Panel: EventEmitter<any> = new EventEmitter<any>();
  //

  ngOnInit() {
  }

  //oshri added
  SelectedCPUType(value: any) { this.CPUType.emit(value) }

  SelectedGPUType(value: any) { this.GPUType.emit(value) }

  SelectedStorage(value: any) { this.Storage.emit(value) }

  SelectedGPU(value: any) { this.GPU.emit(value) }

  SelectedCPU(value: any) { this.CPU.emit(value) }

  InchNum(value: any) { this.InchSize.emit(value)}

  selectedResolutaion(value: any) { this.Resolution.emit(value) }

  PanelSelected(value: any) { this.Panel.emit(value) }
  //
}
