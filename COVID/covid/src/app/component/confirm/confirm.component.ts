import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent implements OnInit {
  employeeid: string;
  affectedDate: string;
  dosages: string;
  sickLeaves: string;
  funds: string;
  status: string;
  constructor() {}

  ngOnInit(): void {
    this.employeeid = localStorage.getItem('employeeid');
    this.affectedDate = localStorage.getItem('affectedDate');
    this.dosages = localStorage.getItem('dosages');
    this.sickLeaves = localStorage.getItem('sickLeaves');
    this.funds = localStorage.getItem('funds');
    this.status = localStorage.getItem('status');
  }
}
