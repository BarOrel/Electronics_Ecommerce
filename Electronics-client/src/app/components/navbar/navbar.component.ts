import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { CartService } from 'src/app/services/CartService/Cart.service';
import { EventService } from 'src/app/services/EventService/event.service';
import { ProductService } from 'src/app/services/ProductService/product.service';
import { AuthService } from 'src/app/services/User/Auth/Auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  items:any;
  @Input() state?: boolean;
  @Output() ShowMenu: EventEmitter<any> = new EventEmitter<any>();
  counter: any;
  IsLoggedIn: any;
  AccountMenu: boolean = false;
  itemsDiv:boolean = false
  clickeventsub: Subscription;
  IsAdmin: any;
  SearchText: any;
  userName: any;
  constructor(private service: EventService, private authSerice: AuthService, private productService: ProductService, private cartService: CartService,private route:Router,private activetedroute:ActivatedRoute) {
      this.clickeventsub = this.service.getEventCounter().subscribe(() => {
        this.LoadCounter();
      });
     }

  ClickShowMenu() {
    this.service.sendClickEvent();
  }

  ngOnInit(): void {
    this.activetedroute.params.subscribe((params)=>{
      this.productService.GetAll(16).subscribe((data)=>{
        this.items = data
        
      }
      )
    })
  

    this.IsLoggedIn = this.authSerice.isLoggedIn()
    this.IsAdmin = this.authSerice.isAdmin()
     this.LoadCounter();
 
   this.userName =this.authSerice.Username()

  }

  DisplayItemsDiv(value:any){
    if(value.length > 1){
      this.itemsDiv = true
      
  
    }
    else {this.itemsDiv = false}

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
      this.IsAdmin = this.authSerice.isAdmin()
      this.authSerice.Logout()
      this.IsLoggedIn = this.authSerice.isLoggedIn()
      this.IsAdmin = this.authSerice.isAdmin()
    } else if (result.isDenied) {
      
    }
  })
 
}
}
