import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee.model';
import { vdto } from 'src/app/model/vdto.model';
import { CovidService } from 'src/app/service/covid.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employeeArr: Employee[] = [];
  victim: vdto;
  constructor(private covidService: CovidService, private router: Router) {}

  ngOnInit(): void {
    this.covidService.getAllEmployees().subscribe((data) => {
      this.employeeArr = data;
    });
  }
  submitCovid(covidForm: NgForm) {
    this.victim = {
      employeeid: covidForm.value.employeeid,
      affectedDate: covidForm.value.affectedDate,
      dosages: covidForm.value.dosages,
      sickLeaves: covidForm.value.sickLeaves,
      funds: covidForm.value.funds,
      status: covidForm.value.status,
    };
    console.log(covidForm.value.status);
    this.covidService.insertVictim(this.victim).subscribe((data) => {
      this.victim = data;
      localStorage.setItem('employeeid', covidForm.value.employeeid);
      localStorage.setItem('affectedDate', covidForm.value.affectedDate);
      localStorage.setItem('dosages', covidForm.value.dosages);
      localStorage.setItem('sickLeaves', covidForm.value.sickLeaves);
      localStorage.setItem('funds', covidForm.value.funds);
      localStorage.setItem('status', covidForm.value.status);
      this.router.navigateByUrl('/confirm');
    });
  }
}
