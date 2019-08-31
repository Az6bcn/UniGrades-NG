import { Subject as course } from './../Models/Subject';
import { Subject, empty, never } from 'rxjs';
import { Injectable } from '@angular/core';
import *  as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
 cachedData =  new Subject<course>();
cachedData$ = this.cachedData.asObservable();
private expiryTime: any;

constructor() { }


setTimer(time: number, data: course) {

  this.cachedData.next(data);
  this.expiryTime = moment().add(time, 'm');
  console.log(this.expiryTime);

  setTimeout(() => {
    this.cachedData.next(new course());
  },
  (time * 60000));
}


 isExpired() {
  console.log(moment());
  console.log(this.expiryTime);
  console.log(moment().isBefore(this.expiryTime));
  return (moment().isBefore(this.expiryTime));
}

}
