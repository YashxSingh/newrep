import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HomeComponent } from './component/home/home.component';
import { AllDoctorComponent } from './component/all-doctor/all-doctor.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { BookAppointmentComponent } from './component/book-appointment/book-appointment.component';
import { AllAppointmentComponent } from './component/all-appointment/all-appointment.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './component/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AllDoctorComponent,
    PageNotFoundComponent,
    BookAppointmentComponent,
    AllAppointmentComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
