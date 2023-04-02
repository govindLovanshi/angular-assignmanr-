import { Component , OnInit , Output  , EventEmitter, Injectable} from '@angular/core';
import { FormBuilder, FormGroup , Validators , FormControl ,FormGroupName  } from '@angular/forms';
import {DataServiceService} from '../service/data-service.service'
import {StringDataService} from '../service/string-data.service'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Output() setFormStateEvent : EventEmitter<any> = new EventEmitter<void>();

  title = 'registration';
  registerForm!: FormGroup;

  productForm! : FormGroup;
  netIncomeMonthly :  any = ""
  privateHealth :  string = ""
  numberOfDependent :  string = ""
  MaintanceObligation :  string = ""
  positionProfession :  string = ""
  
  submitted : boolean = false;
  

  constructor( private _fb : FormBuilder  , private dataService: DataServiceService , private router : Router ){}


  sercice = 'Included services at a glance';
  cardBoz1s = ['Online and telephone banking' , 'Digital mailbox in eSafe' , 'Deutsche Bank mobile app' , 'debit card']
  serviceCharges = '6,90' ;
  nameOfTopic = 'Overdraft facility (granted overdraft)';
  finanaceLeyWay = 'Would you like more financial leeway?'
  overDraft = 'Set the framework for your overdraft facility yourself'
  interestRate = '12,39'
  intersteYear = 'interest per year'
  card = 'cards'
  additionCard = 'Would you like an additional card?'
  DeutscheCard = 'Deutsche Bank Card Plus  (debit card)'
  deutschAdvanatage = 'The debit card with the advantages of a credit card'
  debitCard = 'Direct debit from your account'
  point = ' Pay at millions of acceptance points worldwide - also contactless,mobile and online'
  tranSprenrtSecure = 'Transparent and secure with the My Card app'
  masterCard = 'MasterCard Standard (credit card)'
  theDay = 'The attractive solution for your everyday life'
  CardApp = 'Transparent and more secure with My Card app'
  masteGold = 'MasterCard Gold (credit card)'
  relataibale = 'Your reliable partner in every situation';
  masterCrdtrvel = 'MasterCard Travel (credit card)'
  masterCrsdStron = 'Your strong companion - also when travelling';
  rentalArea = ['Please Select' , 'For rent' , 'In residential property' , 'with the parent']
  
  qualifications = ['Please Select' , 'qualified employee' , 'Senior staff' , 'Civil Servant' ,'Skills builder' , 'student' ,'Pupils' , 'House Wife and husbands']
  
  detuchBankYear = '18,00';
  masterCardYear = '39,00';
  masterCardGold ='82,00';
  mastercardTravel = '94,00'

  hide!: boolean;
  hidden2 : boolean = false;
  cardType : any = "";
  DispoCreditValue : string = ''



  ngOnInit(): void {
    this.setFormState()
    this.saveFormToSessionStorage()
    this.dataService.currentShowData.subscribe(hide => this.hide = hide);
    this.dataService.currentCardType.subscribe(cardType => this.cardType = cardType);
  }

  setFormState(){
    this.productForm = this._fb.group({
      netIncomeMonthly :  ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.min(2)]],
      privateHealth :  ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.min(2)]],
      numberOfDependent :  ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.min(2)]],
      MaintanceObligation :  ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.min(2)]],
      positionProfession :  ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.min(2)]],
    })
    this.getFormFromSessionStorage()
  }
  
  saveFormToSessionStorage() {
    const dataToStore = {
      netIncomeMonthly: this.productForm.controls['netIncomeMonthly'].value,
      privateHealth: this.productForm.controls['privateHealth'].value,
      numberOfDependent: this.productForm.controls['numberOfDependent'].value,
      MaintanceObligation: this.productForm.controls['MaintanceObligation'].value,
      positionProfession: this.productForm.controls['positionProfession'].value
    };
    const json = JSON.stringify(dataToStore);
    sessionStorage.setItem('productForm', json);
    // sessionStorage.getItem('productForm');
    console.log("======data is stored in session storage ======>" ,  json)
  }

  getFormFromSessionStorage() {
    const json = sessionStorage.getItem('productForm');
    if (json) {
      const data = JSON.parse(json);
      this.productForm.setValue({
        netIncomeMonthly: data.netIncomeMonthly,
        privateHealth: data.privateHealth,
        numberOfDependent: data.numberOfDependent,
        MaintanceObligation: data.MaintanceObligation,
        positionProfession: data.positionProfession
      });
      console.log("=======> get data===>" , json)
    }
   
  }

  get foo(){
    return this.productForm.controls
  }

  movingtoNextFunction(){
    console.log("==============>" )
    if(this.productForm.invalid ){
      console.log("===== inside the on productForm")
        return ;
    }
      this.saveFormToSessionStorage()
      this.router.navigate(['personal']);
      
  }



pageChange(){
  this.router.navigate(['personal']);

}

  onSwitchOne(){
    if(this.hide === false){
      this.hide = true
      console.log("--------hide------>" , this.hide)
      this.dataService.updateShowData(this.hide);
    }
    else{
      this.hide = false;
    }
  }

  onSwitchTwo(){
    if(this.hidden2  === false){
      this.hidden2 = true;
      console.log("-------------->" , this.hidden2)
    }else{
      this.hidden2 = false ;
    }
  }

  onChangeCardType(event : any){
    this.cardType = event.target.value;
    this.dataService.updateCardType(this.cardType);
    console.log("this.cardType===>", this.cardType);
  }
  
  onRetun(){
    this.router.navigate(['']);
  }

}
