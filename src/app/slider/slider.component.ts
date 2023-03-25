import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators , FormControl} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {DataServiceService} from '../service/data-service.service'


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [ 
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class SliderComponent implements OnInit {

  [x: string]: any;
  ProductComponent: any;
  submitted : boolean = false;
  registerForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder , private dataService: DataServiceService ) {}

  ngOnInit(): void {
    this.setFormState();
  }

  setFormState(){
    this.registerForm = this._formBuilder.group({
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

  
  onSubmit(){

    this.submitted = true
    if(this.registerForm.invalid){
      return ;
    }
    console.log("running===>" , this.registerForm.value)

   
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    property: ['' , Validators.required],
    Financing: ['' , Validators.required],
    aditionCost : ['' , Validators.required],
    netIncome : ['' , Validators.required],
    privateHelath : ['' , Validators.required],
    numberOfDependent : ['' , Validators.required],
    maintenance : ['' , Validators.required],
    qualification : ['' , Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    gender: ['' , Validators.required],
    firstName: ['' , Validators.required],
    lastName : ['' , Validators.required],
    birthName : ['' , Validators.required],
    country : ['' , Validators.required],
    placeOfBirth : ['' , Validators.required],
    Material : ['' , Validators.required],
    dateOfBirth : ['' , Validators.required],
  });

  fourthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


}
