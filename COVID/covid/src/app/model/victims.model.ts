import { Employee } from './Employee.model';

export class Victims {
  id?: number;
  employee: Employee;
  affectedDate: string;
  dosages: number;
  sickLeaves: number;
  status: string;
  funds: number;
}
