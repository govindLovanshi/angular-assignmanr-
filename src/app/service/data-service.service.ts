import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private hide = new BehaviorSubject<boolean>(false);
  currentShowData = this.hide.asObservable();

  private cardType = new BehaviorSubject<any>('');
  currentCardType = this.cardType.asObservable();

  public onSubmit: Subject<any> = new Subject();

  constructor() { }

  updateShowData(hide: boolean) {
    this.hide.next(hide);
    console.log("updateShowData called with hide = ", hide)
  }

  updateCardType(cardType: any) {
    console.log("======> in services" ,cardType)
    this.cardType.next(cardType);
  }

}
