import { Component ,ViewChild } from '@angular/core';
import {FormBuilder, Validators , FormGroup} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { ProductComponent } from './product/product.component';
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


  constructor(private _formBuilder: FormBuilder) {}

    // listen for the event
    onNext() {
      console.log("hereee it is callled")
      this.ProductComponent.setFormStateEvent.subscribe(() => {
        this.setFormState();
      });
    }

    setFormState() {
     // call the child component's method
     this.ProductComponent.setFormState();
    }

    onToggleChanged(data : any){
      console.log(data)
      this.recivedData = data;
    }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  fourthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
}
