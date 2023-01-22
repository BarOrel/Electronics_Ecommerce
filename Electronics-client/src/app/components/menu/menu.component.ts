import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/services/eventService/event.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  clickeventsub:Subscription;
  constructor(private service:EventService) {
      this.clickeventsub = this.service.getEvent().subscribe(()=>{

         this.showMenu();
      });
   }

  showMen:Boolean = false;
  showMenu(){
    if(this.showMen == false){this.showMen = true}
    else {this.showMen = false}
  }

  ngOnInit() {
  }

}
