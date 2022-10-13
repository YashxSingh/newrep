import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { ConfirmComponent } from './component/confirm/confirm.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { VictimdtoComponent } from './component/victimdto/victimdto.component';
import { ViewEmployeeComponent } from './component/view-employee/view-employee.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"add", component:AddEmployeeComponent},
  {path:"view", component:ViewEmployeeComponent},
  {path:"victimdto", component:VictimdtoComponent},
  {path:"confirm", component:ConfirmComponent},
  {path:"**", component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
