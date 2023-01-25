import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/services/EventService/event.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  clickeventsub:Subscription;
  constructor(private service:EventService,private router:Router) {
      this.clickeventsub = this.service.getEvent().subscribe(()=>{

         this.showMenu();
      });
   }



   NavigateTo(index:number){
    console.log(index)
    this.showMenu();
    this.router.navigate(['/Category']);

   }




  showMen:Boolean = false;
  showMenu(){
    if(this.showMen == false){this.showMen = true}
    else {this.showMen = false}
  }

  ngOnInit() {
  }

}
