import { Component, Input, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filterService/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() Index: any ;
  Storage:boolean = false;
  Procesor:boolean = false;
  OpertionSystem:boolean = false;
  GraphicCard:boolean = false;
  Manufacturer:boolean = false;
  constructor(private filterService:FilterService) { }

  ngOnInit(): void {
    
  }

  StorageIndex(){
    if(this.Storage){ this.Storage = false}
    else {this.Storage = true}

  }
  ProcesorIndex(){
    if(this.Procesor){ this.Procesor = false}
    else {this.Procesor = true}

  }
  OpertionSystemIndex(){
    if(this.OpertionSystem){ this.OpertionSystem = false}
    else {this.OpertionSystem = true}

  }
  GraphicCardIndex(){
    if(this.GraphicCard){ this.GraphicCard = false}
    else {this.GraphicCard = true}

  }
  ManufacturerIndex(){
    if(this.Manufacturer){ this.Manufacturer = false}
    else {this.Manufacturer = true}

  }
 
Test(){console.log(this.Index)}

sendManufaturerFilter(index:number){
this.filterService.manufaturerIndex = index


}
}
