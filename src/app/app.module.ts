import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { SliderComponent } from './slider/slider.component';
import { OverviewComponent } from './overview/overview.component';
import { ClientComponent } from './client/client.component'
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ThemePalette } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { PersonalComponent } from './personal/personal.component'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

import {DataServiceService} from './service/data-service.service';
import {StringDataService} from './service/string-data.service'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    OverviewComponent,
    ClientComponent,
    ProductComponent,
    PersonalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatFormFieldModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  providers: [DataServiceService , StringDataService ],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { 

constructor(){

}


}
