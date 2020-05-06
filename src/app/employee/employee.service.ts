import { Injectable } from '@angular/core';

import { Employee } from './employee';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

const KEY = 'employee';

@Injectable()
export class EmployeeService {

  employeeSubject = new BehaviorSubject<Employee>(null);
  constructor(private snackbar: MatSnackBar) {
    this.getActiveEmployee();
  }

  hasActiveEmployee(): boolean {
    return !!window.localStorage.getItem(KEY);
  }

  setEmployee(employeeName: string) {
    window.localStorage.setItem(KEY, employeeName);
    this.getActiveEmployee();

    this.snackbar.open(`Welcome, ${employeeName}!`);
  }

  getEmployee(): Observable<Employee> {
    return this.employeeSubject.asObservable();
  }

  private getActiveEmployee() {
    const employeeName = window.localStorage.getItem(KEY);

    this.employeeSubject.next(employeeName ? { name: employeeName } : null);
  }

  removeEmployee() {
    window.localStorage.removeItem(KEY);
    this.employeeSubject.next(null);

    this.snackbar.open(`Employee logged out successfully!`);
  }
}
