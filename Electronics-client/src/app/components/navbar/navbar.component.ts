import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CartService } from 'src/app/services/CartService/Cart.service';
import { EventService } from 'src/app/services/EventService/event.service';
import { AuthService } from 'src/app/services/User/Auth/Auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() state?: boolean;
  @Output() ShowMenu: EventEmitter<any> = new EventEmitter<any>();
  counter: any;
  IsLoggedIn: any;
  AccountMenu: boolean = false;
  clickeventsub: Subscription;
  constructor(private service: EventService, private authSerice: AuthService, private cartService: CartService,
    private eventService: EventService) {
      this.clickeventsub = this.service.getEventCounter().subscribe(() => {
        this.LoadCounter();
      });
     }
  ClickShowMenu() {
    this.service.sendClickEvent();
  }
  ngOnInit(): void {
    this.IsLoggedIn = this.authSerice.isLoggedIn()
   
     this.LoadCounter();
 


  }

  OCAccountMenu() {
    if (this.AccountMenu) { this.AccountMenu = false }
    else { this.AccountMenu = true }
  }
  

LoadCounter(){
  this.cartService.getCounter(this.authSerice.userId()).subscribe((data) => {
    this.counter = data
    console.log(data)
  })
}

Logout(){
  this.authSerice.Logout()
  this.IsLoggedIn = this.authSerice.isLoggedIn()
}
}
