import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
public accountType: string = 'createNew';
// public individualAccount: string = 'individualAccount'
public individualAccount! : string ;

  constructor(){

  }
 public  onChangeUserAccountType (event:any) {
   this.accountType = event.target.value;
  }

  public onChangeFresher(event:any){
    this.individualAccount = event.target.value
  }



}
