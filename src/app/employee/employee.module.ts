import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeeModule { }
