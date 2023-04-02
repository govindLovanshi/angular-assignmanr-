import { NgModule }      from '@angular/core';
import { Component ,ViewChild } from '@angular/core';
import {FormBuilder, Validators , FormGroup} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deutsche'; 

  recivedData : boolean = true;

  @ViewChild('ProductComponent') ProductComponent!: ProductComponent;


  parentFormGroup! :FormGroup


  constructor(private _formBuilder: FormBuilder , private authService : AuthService ) {}



  login(){
    this.authService.login()
  }

  logout(){
    this.authService.logout()
  }
    // listen for the event
    // onNext() {
    //   console.log("hereee it is callled")
    //   this.ProductComponent.setFormStateEvent.subscribe(() => {
    //     this.setFormState();
    //   });
    // }

    // setFormState() {
    //  // call the child component's method
    //  this.ProductComponent.setFormState();
    // }

    // onToggleChanged(data : any){
    //   console.log(data)
    //   this.recivedData = data;
    // }


 



}
