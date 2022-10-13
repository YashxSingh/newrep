import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/model/Appointment.model';
import { Doctor } from 'src/app/model/Doctor.model';
import { Slots } from 'src/app/model/Slots.model';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css'],
})
export class BookAppointmentComponent implements OnInit {
  doctorArr: Doctor[];
  slotsArr: Slots[] = [];
  tmpArr: Slots[];
  appointment: Appointment;
  constructor(private patientService: PatientService, private router: Router) {}

  ngOnInit(): void {
    this.patientService.getAllDoctors().subscribe((data) => {
      this.doctorArr = data;
    });
    this.getAllSlots();
  }

  submitPatient(patientForm: NgForm) {
    console.log(patientForm.value.name);
    this.appointment = {
      name: patientForm.value.name,
      age: patientForm.value.age,
      contact: patientForm.value.contact,
      disease: patientForm.value.disease,
      doctor_id: patientForm.value.doctor,
      slots_id: patientForm.value.slots,
    };
    this.patientService.bookAppointment(this.appointment).subscribe((data) => {
      this.appointment = data;
      localStorage.setItem('name', patientForm.value.name);
      localStorage.setItem('age', patientForm.value.age);
      localStorage.setItem('contact', patientForm.value.contact);
      localStorage.setItem('disease', patientForm.value.disease);
      localStorage.setItem('doctor_id', patientForm.value.doctor);
      localStorage.setItem('slots_id', patientForm.value.slots);
      this.router.navigateByUrl('/confirm');
    });
  }

  getAllSlots() {
    this.patientService.getAllSlots().subscribe((data) => {
      this.tmpArr = data;
    });
  }

  doctorSelect(patientForm: NgForm) {
    this.slotsArr = this.tmpArr;
    this.slotsArr = this.slotsArr.filter(
      (s) => s.doctor.id == patientForm.value.doctor
    );
  }
}
