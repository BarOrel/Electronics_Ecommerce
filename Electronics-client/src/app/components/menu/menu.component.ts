import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/services/EventService/event.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  Accecsories: boolean = false;
  Electronics: boolean = false;
  GamingConsoles: boolean = false;
  Computers: boolean = false;
  Mobiles: boolean = false;

  OpenAccessories() {
    if (this.Accecsories == false) {
      this.Accecsories = true;
      this.Computers = false
      this.GamingConsoles = false
      this.Electronics = false
      this.Mobiles = false
    } else {
      this.Accecsories = false;
    }
  }

  OpenElectronics() {
    if (this.Electronics == false) {
      this.Electronics = true;
      this.Accecsories = false;
      this.Computers = false
      this.GamingConsoles = false
      this.Mobiles = false
     
    } else {
      this.Electronics = false;
    }
  }
  OpenGamingConsoles() {
    if (this.GamingConsoles == false) {
      this.Accecsories = false;
      this.Computers = false
      this.Mobiles = false
      this.Electronics = false
      this.GamingConsoles = true;
    } else {
      this.GamingConsoles = false;
    }
  }
  OpenComputers() {
    if (this.Computers == false) {
      this.Accecsories = false;
      this.Mobiles = false
      this.GamingConsoles = false
      this.Electronics = false
      this.Computers = true;
    } else {
      this.Computers = false;
      
    }
  }

  clickeventsub: Subscription;
  constructor(private service: EventService, private router: Router) {
    this.clickeventsub = this.service.getEvent().subscribe(() => {
      this.showMenu();
    });
  }

  OpenMobiels() {
    if (this.Mobiles == false) {
      this.Mobiles = true;
      this.Accecsories = false
      this.Computers = false
      this.GamingConsoles = false
      this.Electronics = false
    } else {
      
    }
  }

  NavigateTo(index: number) {
    this.showMenu();
    this.router.navigate(['/Category/' + index]);
  }

  showMen: Boolean = false;
  showMenu() {
    if (this.showMen == false) {
      this.showMen = true;
      this.Mobiles = false;
      this.Accecsories = false
      this.Computers = false
      this.GamingConsoles = false
      this.Electronics = false
    } else {
      this.showMen = false;
      this.Mobiles = false;
      this.Accecsories = false
      this.Computers = false
      this.GamingConsoles = false
      this.Electronics = false
    }
  }

 

  ngOnInit() {}
}
