import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number = 0;

  constructor(private route:ActivatedRoute) { }
  
  ngOnInit():void {

      this.route.params.subscribe((params)=>{
      this.id = Number(params["id"]);
  
      console.log(this.id);
  
    })
  }

}
