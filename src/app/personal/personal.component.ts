import { Component , NgModule , OnInit} from '@angular/core';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
 

  title = 'Your active account in a few minutes';
  phara = 'Personal Information'

  submitted : boolean = false;
  registerForm!: FormGroup;

  him = 'Him';
  Her = 'Her';
  gender = "Select a Gender!"; 
  name = 'First Name';
  lastName = 'Last Name';
  bName = 'Birth name';
  MaterialStatus = 'Material Status'
  arrayMaterialStatus = ['Single' , 'Married' , 'available' , 'widowed' , 'register civil patnership'];
  DateofBirth = 'Date of Birth';
  placeOdBirth = 'place of Birth';
  countrys = ['India', 'USA' ,'Canada' ,'Africa', 'China' , 'Japan' , 'Australia' , 'Germany']
  relationData = 'Due to a US tax law, German banks are obliged to collect and report account-related data from US persons'
  taxResidential = 'Tax Residence'
  reportingAddress = 'Reporting address'
  seasons = ['I am only resident in Germany for tax purposes.' ,'I am tax resident in Germany and in the following countries.' , 'I am not tax resident in Germany, but only in the following countries outside of Germany.']
  radioButtonOne = 'I am only resident in Germany for tax purposes'
  radioButtonTwo = 'I am tax resident in Germany and in the following countries.';
  radioButtonThree = 'I am not tax resident in Germany, but only in the following countries outside of Germany.'

  myGender = [
    {id : 1 , value : 'Him'},
    {id : 2 , value : 'Her'},
  ]

  residentialGermany : string = 'residentialGermany';
  taxresidentalGermany :  string = 'texresidentalGermany';
  nonResidentalgermany : string ='nonResidentalgermany'
  selectedOption: string = '';

  constructor( private _fb : FormBuilder  ){

  }
  ngOnInit(): void {
    this.setFormState();
  }

  setFormState(){
    this.registerForm = this._fb.group({
      gender: ['' , Validators.required],
      firstName: ['' , Validators.required],
      lastName : ['' , Validators.required],
      birthName : ['' , Validators.required],
      country : ['' , Validators.required],
      placeOfBirth : ['' , Validators.required],
      Material : ['' , Validators.required],
      dateOfBirth : ['' , Validators.required],
    })
  }

  get foo(){
    return this.registerForm.controls
  }
  
  toppings = this._fb.group({
    bornInUs: false,
    holdCitizenship: false,
    greenCard: false,
  });



  onSubmit(){
    this.submitted = true
    console.log("running===>" , this.registerForm.value)
    if(this.registerForm){
      return ;
    }
  }

  onRetun(){}


  onChangeFresher(event: any) {
    this.selectedOption = event.value;
  }

  
}
