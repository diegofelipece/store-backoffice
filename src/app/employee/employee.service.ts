import { Injectable } from '@angular/core';

import { Employee } from './employee';

const KEY = 'employee';

@Injectable()
export class EmployeeService {

  constructor() { }

  hasActiveEmployee(): boolean {
    const employee = this.getEmployee();
    return !!employee.name;
  }

  setEmployee(employeeName: string) {
    window.localStorage.setItem(KEY, employeeName);
  }

  getEmployee(): Employee {
    const employee = window.localStorage.getItem(KEY);

    return {
      name: employee
    };
  }

  deleteEmployee() {
    window.localStorage.removeItem(KEY);
  }
}
