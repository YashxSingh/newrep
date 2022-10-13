import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAppointmentComponent } from './component/all-appointment/all-appointment.component';
import { AllDoctorComponent } from './component/all-doctor/all-doctor.component';
import { BookAppointmentComponent } from './component/book-appointment/book-appointment.component';
import { ConfirmComponent } from './component/confirm/confirm.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all-appointment', component: AllAppointmentComponent },
  { path: 'all-doctor', component: AllDoctorComponent },
  { path: 'book', component: BookAppointmentComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
