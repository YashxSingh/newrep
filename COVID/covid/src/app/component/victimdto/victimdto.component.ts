import { Component, OnInit } from '@angular/core';
import { Victims } from 'src/app/model/victims.model';
import { CovidService } from 'src/app/service/covid.service';

@Component({
  selector: 'app-victimdto',
  templateUrl: './victimdto.component.html',
  styleUrls: ['./victimdto.component.css'],
})
export class VictimdtoComponent implements OnInit {
  victimArr: Victims[];
  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
    this.covidService.getAllVictims().subscribe((data) => {
      this.victimArr = data;
    });
  }
}
