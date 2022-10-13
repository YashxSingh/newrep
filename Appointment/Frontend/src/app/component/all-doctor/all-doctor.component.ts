import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/Doctor.model';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-all-doctor',
  templateUrl: './all-doctor.component.html',
  styleUrls: ['./all-doctor.component.css'],
})
export class AllDoctorComponent implements OnInit {
  doctorArr: Doctor[];
  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getAllDoctors().subscribe((data) => {
      this.doctorArr = data;
    });
  }
}
