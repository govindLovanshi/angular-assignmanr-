import { Injectable } from '@angular/core';
import { User} from '../_helper/user_interface'


@Injectable({
  providedIn: 'root'
})
export class DataService  {

  constructor() { }

  createDb(){
    let users :User [] = [
      { 
         accountType : 'createNew' ,alreadyRegister : 'on' ,   netIncomeMonthly : '11'  , privateHealth: '22',numberOfDependent: '33' , MaintanceObligation : '44' ,positionProfession :'56' , firstName : 'govind', lastName : 'lowanshi', dateOfBirth : '1996-10-22', materialStatus : 'Single',placeOfBirth : 'indore', country : 'India',plz : '410203', city : 'pune', phoneNumber : '+8087746131', streetAndNumber : 'kacmi nagar 101', email : 'gogo@gmail.com', transactions : false, moneyLaundering : false , schufa: false, custody : false , isDownloaded : false, isDownloaded2 : false
      },

    ]
    return { allUser : users };
  }

  


}
