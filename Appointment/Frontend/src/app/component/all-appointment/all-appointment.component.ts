import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/model/Appointment.model';
import { Doctor } from 'src/app/model/Doctor.model';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-all-appointment',
  templateUrl: './all-appointment.component.html',
  styleUrls: ['./all-appointment.component.css'],
})
export class AllAppointmentComponent implements OnInit {
  appointmentArr: Appointment[];
  doctorArr: Doctor[];
  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getAllAppointments().subscribe((data) => {
      this.appointmentArr = data;
    });

    this.patientService.getAllDoctors().subscribe((data) => {
      this.doctorArr = data;
    });
  }
}
