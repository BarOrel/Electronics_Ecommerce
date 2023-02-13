import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EventService {
  pageIndex:any;  
  private subject = new Subject<any>();

  private num = new EventEmitter<number>();
  sendClickEvent() {
   this.subject.next(this.getEvent());
  }
  sendClickEventCounter() {
    console.log('click')
    this.subject.next(this.getEventCounter());
   }

  getEvent():Observable<any>{
    return this.subject.asObservable();
  }
 
  getEventCounter():Observable<any>{
    return this.subject.asObservable();
  }

  sendNum(val:any){
    this.num.emit(val)
  }
}
