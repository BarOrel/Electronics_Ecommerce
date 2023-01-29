import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-Add-SmartWatch',
  templateUrl: './Add-SmartWatch.component.html',
  styleUrls: ['./Add-SmartWatch.component.css']
})
export class AddSmartWatchComponent implements OnInit {


  @Output() Storage:EventEmitter<any> = new EventEmitter<any>();
  @Output() OperationSystem: EventEmitter<any> = new EventEmitter<any>();
  @Output() Miliamper: EventEmitter<any> = new EventEmitter<any>();
  @Output() Sizemm: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
  
  ngOnInit() {
  }
  
  SelectedStorage(value:any){this.Storage.emit(value) }
  selectedoperationSystem(value: any) { this.OperationSystem.emit(value) }
  MilliamperHoursNum(value: any) { this.Miliamper.emit(value) }
  selectrdSizemm(value: any) { this.Sizemm.emit(value)  }
    

}
