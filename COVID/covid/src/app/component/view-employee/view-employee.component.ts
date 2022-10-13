import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/Employee.model';
import { CovidService } from 'src/app/service/covid.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css'],
})
export class ViewEmployeeComponent implements OnInit {
  employeeArr: Employee[];
  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
    this.covidService.getAllEmployees().subscribe((data) => {
      this.employeeArr = data;
    });
  }
}
