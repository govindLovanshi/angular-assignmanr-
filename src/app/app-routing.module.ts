import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ProductComponent } from './product/product.component';
import { PersonalComponent } from './personal/personal.component';
import { LegalComponent } from './legal/legal.component';
import { CourseGuardServices } from './course-guard.service';
import { ActiveComponent } from './active/active.component';
import {WelcomeComponent} from './welcome/welcome.component'
const routes: Routes = [
  {path : '' , component : ClientComponent },
  {path : 'product' , component  : ProductComponent },
  {path : 'personal' , component : PersonalComponent },
  {path : 'legal' , component : LegalComponent},
  {path : 'active' , component : ActiveComponent  },
  {path : 'thankyou' , component : WelcomeComponent  },
  { path: '**', redirectTo: '' },
];
      //  canActivate : [CourseGuardServices]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
