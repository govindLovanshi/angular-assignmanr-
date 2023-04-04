import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup , Validators , FormControl ,FormGroupName  } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ClientService } from '../api-service/client.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  selectedOption: string = '';
  showValidationMessage: boolean = false;

  submitted = false;

  submittedValue: any;

  clientForm! : FormGroup;


  public accountType: any = '';
  public individualAccount : string ='' ;
  public fresherAccount : any = ''
  public radioButton : any = ''
  public checkingFresher :  string = '';
  public chckingCustomer : string= ''
  public customer: string = ''

  alreadyRegister: string = ''

  freherAccount!: any;

  yesFresher : any;
  noFresher : any;
  radioClicked: boolean = true;

constructor(private router : Router , private _fb : FormBuilder , private clientService : ClientService ){}

  ngOnInit(): void {

    this.setFormState()
    this.saveFormToSessionStorage()

  }

  setFormState(){
    this.clientForm = this._fb.group({
      customer: new FormControl('', [Validators.required]),
      alreadyRegister : new FormControl('' , [Validators.required]),  
    })
    this.getFormFromSessionStorage()
  }

  saveFormToSessionStorage() {
    const dataToStore = {
      customer: this.clientForm.controls['customer'].value,
      alreadyRegister: this.clientForm.controls['alreadyRegister'].value, 
    };
    const json = JSON.stringify(dataToStore);
    sessionStorage.setItem('clientForm', json);

    // this.clientService.userClient(json).subscribe((result)=>{
    //   console.log("result====>" ,  result)
    // })

    console.log("======data is stored in session storage ======>" ,  json)
  }

  getFormFromSessionStorage() {
    const json = sessionStorage.getItem('clientForm');
    if (json) {
      const data = JSON.parse(json);
      this.clientForm.setValue({
        customer: data.customer,
        alreadyRegister: data.alreadyRegister,
      });
      console.log("=======> get data===>" , json)
    }
  }

 // next page 
 async moveTonextPage(){
    console.log("=================moveTonextPage==============>" , this.clientForm.value);
  let data = this.clientForm.value
  this.submitted = true
  
    if(this.clientForm.invalid ){
      return ;
    }
    else{
      this.clientService.userClient(data).subscribe((result) => {
        console.log("data should send in json Server====>", result);
     })
      this.saveFormToSessionStorage()
      this.router.navigate(['product']);
    }
    (error) => {
      console.log("Error in sending data to JSON Server====>", error);
      }

    
  
}

  async restartFun(event:any){
    if(this.customer && this.customer !== event.target.value) {
      await this.clientForm.reset();
     
    } 
    this.customer = event.target.value
    console.log("this.clientForm",this.clientForm);
  }
  
 public  onChangeUserAccountType (event:any) {
  console.log( "accountType===>" , event.target.value)
   this.accountType = event.target.value;
   this.radioButton = '' || undefined;
   this.fresherAccount ='' || undefined
  }

  public onChangeFresher(event:any){
    console.log( "individualAccount===>" , event.target.value)
    this.individualAccount = event.target.value
  }

  askingFresher(event : any){
    console.log("fresherAccount=====>",event.target.value)
    this.fresherAccount = event.target.value
  }

  hereIsData(event: any){
    console.log("radioButton====>" ,  event.target.value)
    this.radioButton =  event.target.value
  }

  checkingForFresher(event : any){
    console.log("checkingFresher====>" ,  event.target.value);
    this.checkingFresher = event.target.value
  }

  get foo(){
    return this.clientForm.controls
  }
}
