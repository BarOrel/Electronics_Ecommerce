import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/User/Auth/Auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService) {
    // authService.UserValidation()
   }

  ngOnInit(): void {
    

    
  }

}
