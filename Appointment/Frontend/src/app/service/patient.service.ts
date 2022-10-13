import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/Appointment.model';
import { Doctor } from '../model/Doctor.model';
import { Slots } from '../model/Slots.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  getAllAppointments():Observable<Appointment[]> {
    return this.http.get<Appointment[]>("http://localhost:8181/appointment/get/all");
  }

  bookAppointment(appointment: Appointment):Observable<Appointment> {
    return this.http.post<Appointment>("http://localhost:8181/insert/appointment", appointment);
  }
  constructor(private http:HttpClient) { }

  getAllDoctors():Observable<Doctor[]> {
    return this.http.get<Doctor[]>("http://localhost:8181/doctor/get/all");
  }

  getAllSlots():Observable<Slots[]> {
    return this.http.get<Slots[]>("http://localhost:8181/slots/get/all");
  }

  getDoctor(id:number):Observable<Doctor>{
    return this.http.get<Doctor>("http://localhost:8181/doctor/get/" + id);
  }

  getSlots(id:number):Observable<Slots>{
    return this.http.get<Slots>("http://localhost:8181/slots/get/" + id);
  }

}
