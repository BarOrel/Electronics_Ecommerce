import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-mobile-phone',
  templateUrl: './Add-MobilePhone.component.html',
  styleUrls: ['./Add-MobilePhone.component.css']
})
export class AddMobilePhoneComponent implements OnInit {


  //oshri added
  @Output() Storage: EventEmitter<any> = new EventEmitter<any>();
  @Output() InchSize: EventEmitter<any> = new EventEmitter<any>();
  @Output() Miliamper: EventEmitter<any> = new EventEmitter<any>();
  @Output() OperationSystem: EventEmitter<any> = new EventEmitter<any>();
  @Output() Resolution: EventEmitter<any> = new EventEmitter<any>();
  //


  constructor() { }

  ngOnInit(): void {
  }

  //oshri added
  SelectedStorage(value: any) { this.Storage.emit(value) }

  MilliamperHoursNum(value: any) { this.Miliamper.emit(value) }

  InchNum(value: any) { this.InchSize.emit(value) }

  selectedoperationSystem(value: any) { this.OperationSystem.emit(value) }

  selectedResolu(value: any) { this.Resolution.emit(value) }
  //
}
