import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employees: Observable<Employee[]>;
  constructor(private store: Store<{customers: Employee[]}>) {
    this.employees = store.pipe(select('customers'));
  }

  ngOnInit(): void {
  }

}
