import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit ,Output } from '@angular/core';
import { CartService } from 'src/app/services/CartService/Cart.service';
import { EventService } from 'src/app/services/EventService/event.service';
import { AuthService } from 'src/app/services/User/Auth/Auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() state?:boolean;
  @Output() ShowMenu:EventEmitter<any> = new EventEmitter<any>();
  counter:any;
  constructor(private service:EventService,private authSerice:AuthService,private cartService:CartService) { }
  ClickShowMenu(){
  this.service.sendClickEvent();
  }
  ngOnInit(): void {
    this.LoadCounter();
  }

  LoadCounter(){
    this.cartService.getCounter(this.authSerice.userId()).subscribe((data)=>{
      this.counter = data
      })
  }

  Logout(){
    this.authSerice.Logout()
  }
}
