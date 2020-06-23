import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EmployeeReducer} from 'src/app/reducers/employee.reducer';
import { AppComponent } from './app.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeViewComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ employees: EmployeeReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
