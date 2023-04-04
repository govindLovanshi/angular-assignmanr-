import { NgModule, OnInit }      from '@angular/core';
import { Component ,ViewChild } from '@angular/core';
import {FormBuilder, Validators , FormGroup} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { AuthService } from './auth.service';
import{UserService} from './_helper/user.service';
import {User} from './_helper/user_interface'
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Deutsche'; 

  recivedData : boolean = true;

  @ViewChild('ProductComponent') ProductComponent!: ProductComponent;


  parentFormGroup! :FormGroup

  users : User[] = [];

  constructor(private _formBuilder: FormBuilder , private authService : AuthService , private _userService : UserService , private _httpService : HttpClient ) {}
  ngOnInit(): void {
  }



  login(){
    this.authService.login()
  }

  logout(){
    this.authService.logout()
  }
    

 
 




}
