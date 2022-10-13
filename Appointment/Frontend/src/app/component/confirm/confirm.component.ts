import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/Doctor.model';
import { Slots } from 'src/app/model/Slots.model';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent implements OnInit {
  name: string;
  disease: string;
  contact: string;
  age: string;
  doctor_id: string;
  slots_id: string;
  doctor: Doctor;
  slot: Slots;

  constructor(private patientService:PatientService) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.disease = localStorage.getItem('disease');
    this.contact = localStorage.getItem('contact');
    this.doctor_id = localStorage.getItem('doctor_id');
    this.slots_id = localStorage.getItem('slots_id');
    this.age = localStorage.getItem('age');

    this.patientService.getDoctor(parseInt(this.doctor_id)).subscribe(data=>{
      this.doctor = data;
    });

    this.patientService.getSlots(parseInt(this.slots_id)).subscribe(data=>{
      this.slot = data;
    });
  }
}
