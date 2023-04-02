import { Component , NgModule , OnInit} from '@angular/core';
import { FormBuilder, FormGroup , Validators , FormControl ,FormGroupName  } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
 

  title = 'Your active account in a few minutes';
  phara = 'Personal Information'

  submitted : boolean = false;
  

  personalForm! : FormGroup;
  firstName :  string = "";
  lastName :  string = "";
  dateOfBirth :  string = "";
  materialStatus :  string = "";
  placeOfBirth :  string = "";
  streetAndNumber: string = "";
  plz: string = "";
  city: string = "";
  phoneNumber: string = "";
  email: string = "";
  country :  string = "";

  countries: any[] = [];

  constructor( private _fb : FormBuilder , private router : Router , private http: HttpClient  ){}

  ngOnInit(): void {
    this.setFormState()
    this.saveFormToSessionStorage()
    this.http.get('https://api.first.org/data/v1/countries').subscribe((data: any) => {
      this.countries = Object.keys(data['data']);
    });

  } 



  setFormState(){
    this.personalForm = this._fb.group({
      firstName :  ['' ,[Validators.required , Validators.min(2) ]],
      lastName :  ['' ,[Validators.required , Validators.min(2)]],
      dateOfBirth : ['' , Validators.compose([Validators.required , Validators.pattern(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)])],
      placeOfBirth :  ['' ,[Validators.required , Validators.min(2)]],
      streetAndNumber: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+\d+$/)]],
      plz : ['', [Validators.required,  Validators.pattern(`^[0-9]{5}$`) ]],
      city : ['', [Validators.required, Validators.min(4)]],
      phoneNumber : ['', [Validators.required, Validators.pattern(/^(\+91)[1-9][0-9]{9}$/)]],
      email : ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],

      materialStatus :  ['' ,Validators.required ],
      country :  ['' ,Validators.required ],

    })
    this.getFormFromSessionStorage()
  }

  saveFormToSessionStorage() {
    const dataToStore = {
      firstName: this.personalForm.controls['firstName'].value,
      lastName: this.personalForm.controls['lastName'].value,
      dateOfBirth: this.personalForm.controls['dateOfBirth'].value,
      materialStatus: this.personalForm.controls['materialStatus'].value,
      placeOfBirth: this.personalForm.controls['placeOfBirth'].value,
      country: this.personalForm.controls['country'].value,
      streetAndNumber: this.personalForm.controls['streetAndNumber'].value,
      plz: this.personalForm.controls['plz'].value,
      city: this.personalForm.controls['city'].value,
      phoneNumber: this.personalForm.controls['phoneNumber'].value,
      email: this.personalForm.controls['email'].value,
      
    };
    const json = JSON.stringify(dataToStore);
    sessionStorage.setItem('personalForm', json);
    console.log("======data is stored in session storage ======>" ,  json)
  }

  getFormFromSessionStorage() {
    const json = sessionStorage.getItem('personalForm');
    if (json) {
      const data = JSON.parse(json);
      this.personalForm.setValue({
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: data.dateOfBirth,
        materialStatus: data.materialStatus,
        placeOfBirth: data.placeOfBirth,
        country: data.country,
        streetAndNumber: data.streetAndNumber,
        plz: data.plz,
        city: data.city,
        phoneNumber: data.phoneNumber,
        email: data.email,

      });
      console.log("=======> get data===>" , json)
    }
  }

  movingtoNextFunction(){

    if(this.personalForm.invalid ){
        return ;
    }
    this.saveFormToSessionStorage()

    this.router.navigate(['legal']);
  }

  him = 'Him';
  Her = 'Her';
  gender = "Select a Gender!"; 
  name = 'First Name';
  bName = 'Birth name';
  MaterialStatus = 'Material Status'
  arrayMaterialStatus = ['Single' , 'Married' , 'available' , 'widowed' , 'register civil patnership'];
  DateofBirth = 'Date of Birth';
  placeOdBirth = 'place of Birth';
  relationData = 'Due to a US tax law, German banks are obliged to collect and report account-related data from US persons'
  taxResidential = 'Tax Residence'
  reportingAddress = 'Reporting address'
  seasons = ['I am only resident in Germany for tax purposes.' ,'I am tax resident in Germany and in the following countries.' , 'I am not tax resident in Germany, but only in the following countries outside of Germany.']
  radioButtonOne = 'I am only resident in Germany for tax purposes'
  radioButtonTwo = 'I am tax resident in Germany and in the following countries.';
  radioButtonThree = 'I am not tax resident in Germany, but only in the following countries outside of Germany.'
  
  // countries = ['India', 'USA', 'Canada', 'Africa', 'China', 'Japan', 'Australia', 'Germany'];

  residentialGermany : string = 'residentialGermany';
  taxresidentalGermany :  string = 'texresidentalGermany';
  nonResidentalgermany : string ='nonResidentalgermany'
  selectedOption: string = '';


  toppings = this._fb.group({
    bornInUs: false,
    holdCitizenship: false,
    greenCard: false,
  });

  onRetun(){
    this.router.navigate(['product']);
  }

  onChangeFresher(event: any) {
    this.selectedOption = event.value;
  }


}
