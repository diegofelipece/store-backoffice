import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { EmployeeService } from 'src/app/employee/employee.service';
import { Employee } from 'src/app/employee/employee';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title = '';
  employee$: Observable<Employee>;
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.employee$ = this.employeeService.getEmployee();
  }

  employeeLogout() {
    this.employeeService.removeEmployee();
    this.router.navigate(['employee']);
  }
}
