import { Component , NgModule , OnInit} from '@angular/core';
import { FormBuilder, FormGroup , Validators , FormControl ,FormGroupName  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent {


  productForm!: any;
  password : string = '';
  repeatPassword : string = '';

  constructor(private _fb : FormBuilder , private router : Router ){
    this.productForm = _fb.group({
      password :   ['' ,[Validators.required , Validators.pattern(/^(?:(\d)(?=\d\1\d\1\d)|([a-zA-Z])(?=[a-zA-Z]\2[a-zA-Z]\2[a-zA-Z]))[0-9a-zA-Z]{4}$/) ]],
      repeatPassword : ['' ,[Validators.required , Validators.pattern(/^(?:(\d)(?=\d\1\d\1\d)|([a-zA-Z])(?=[a-zA-Z]\2[a-zA-Z]\2[a-zA-Z]))[0-9a-zA-Z]{4}$/) ]],

    })
  }



}
