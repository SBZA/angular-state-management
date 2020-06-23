import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { EmployeeRemove } from '../actions/employee.actions';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employees: Observable<Employee[]>;
  constructor(private store: Store<{employees: Employee[]}>) {
    this.employees = store.pipe(select('employees'));
  }

  ngOnInit(): void {
  }
  removeEmployee(customerIndex) {
    this.store.dispatch(new EmployeeRemove(customerIndex));
  }
}
