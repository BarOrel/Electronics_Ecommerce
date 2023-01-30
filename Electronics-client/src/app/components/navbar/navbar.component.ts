import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit ,Output } from '@angular/core';
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
  constructor(private service:EventService,private authSerice:AuthService) { }
  ClickShowMenu(){
  this.service.sendClickEvent();
  }
  ngOnInit(): void {
  }

  Logout(){
    this.authSerice.Logout()
  }
}
