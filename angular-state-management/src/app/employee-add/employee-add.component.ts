import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { Store, select } from '@ngrx/store';
import { EmployeeAdd } from '../actions/employee.actions';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent  {

  employees: Observable<Employee[]>;
  constructor(private store: Store<{employees: Employee[]}>) {
    this.employees = store.pipe(select('employees'));
   }
   addEmployee(employeeName: string) {
      const employee = new Employee();
      employee.firstName = employeeName;
      console.log('ADD EMPLOYEE: ' + employeeName);
      this.store.dispatch(new EmployeeAdd(employee));
    }

}
