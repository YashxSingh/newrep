import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/Employee.model';
import { vdto } from '../model/vdto.model';
import { Victims } from '../model/victims.model';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:6969/employee/get/all');
  }

  getAllVictims():Observable<Victims[]>{
    return this.http.get<Victims[]>("http://localhost:6969/victims/all");
  }

  insertVictim(victim: vdto):Observable<vdto> {
    return this.http.post<vdto>("http://localhost:6969/victimdto/insert", victim);
  }

}
