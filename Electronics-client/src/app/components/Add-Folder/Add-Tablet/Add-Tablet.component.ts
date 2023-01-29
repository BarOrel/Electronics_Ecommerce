import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-Add-Tablet',
  templateUrl: './Add-Tablet.component.html',
  styleUrls: ['./Add-Tablet.component.css']
})
export class AddTabletComponent implements OnInit {
  @Output() Storage: EventEmitter<any> = new EventEmitter<any>();
  @Output() InchSize: EventEmitter<any> = new EventEmitter<any>();
  @Output() Miliamper: EventEmitter<any> = new EventEmitter<any>();
  @Output() OperationSystem: EventEmitter<any> = new EventEmitter<any>();
  @Output() Resolution: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }
  SelectedStorage(value: any) { this.Storage.emit(value) }

  MilliamperHoursNum(value: any) { this.Miliamper.emit(value) }

  InchNum(value: any) { this.InchSize.emit(value) }

  selectedoperationSystem(value: any) { this.OperationSystem.emit(value) }

  selectedResolutaion(value: any) { this.Resolution.emit(value) }
}