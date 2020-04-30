import { Component, OnInit } from '@angular/core';

import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // TODO: create form component to get employeeName from user
    setTimeout(() => {
      this.setEmployee();
    }, 3000);
  }

  setEmployee() {
    this.employeeService.setEmployee('Diego');
    this.router.navigate(['dashboard']);
  }
}
