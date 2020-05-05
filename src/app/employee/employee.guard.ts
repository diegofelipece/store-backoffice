import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EmployeeService } from './employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class EmployeeGuard implements CanActivate {

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (!this.employeeService.hasActiveEmployee()) {
      this.snackbar.open('Please inform your name to start.');
      this.router.navigate(['employee']);
      return false;
    }

    return true;
  }
}
