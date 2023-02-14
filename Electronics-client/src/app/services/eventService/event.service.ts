import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EventService {
  pageIndex:any;  
  private subject = new Subject<any>();
  private subject2 = new Subject<any>();

  private num = new EventEmitter<number>();
  sendClickEvent() {
   console.log('click')
   this.subject.next(this.getEvent());
  }
  sendClickEventCounter() {
    console.log('click')
    this.subject2.next(this.getEventCounter());
   
   }
   getEventCounter():Observable<any>{
     return this.subject2.asObservable();
   }

  getEvent():Observable<any>{
    return this.subject.asObservable();
  }
 

 
}
