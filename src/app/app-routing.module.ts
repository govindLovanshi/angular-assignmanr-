import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ProductComponent } from './product/product.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  {path : '' , component : ClientComponent},
  {path : 'product' , component  : ProductComponent},
  {path : 'personal' , component : PersonalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


    
}
