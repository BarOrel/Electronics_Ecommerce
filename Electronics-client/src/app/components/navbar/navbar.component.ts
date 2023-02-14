import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { CartService } from 'src/app/services/CartService/Cart.service';
import { EventService } from 'src/app/services/EventService/event.service';
import { AuthService } from 'src/app/services/User/Auth/Auth.service';
import Swal from 'sweetalert2';

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
  constructor(private service: EventService, private authSerice: AuthService, private cartService: CartService,private route:Router) {
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
  
  if(this.authSerice.isLoggedIn()){
    this.cartService.getCounter(this.authSerice.userId()).subscribe((data) => {
      this.counter = data
      console.log(data)
    })
  }
  this.counter = null
}

Login(){
  this.OCAccountMenu();
  this.route.navigate(['/login'])
}


Logout(){
  Swal.fire({
    title: 'Do you want to Logout?',
    
    showCancelButton: true,
    confirmButtonText: 'Yes',
    
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.OCAccountMenu();
      this.authSerice.Logout()
      this.IsLoggedIn = this.authSerice.isLoggedIn()
    } else if (result.isDenied) {
      
    }
  })
 
}
}
