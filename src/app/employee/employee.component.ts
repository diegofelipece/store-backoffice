import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(22),
          Validators.pattern(/^\S/),
        ]
      ]
    });
  }

  setEmployee(employeeName: string) {
    this.employeeService.setEmployee(employeeName);
    this.router.navigate(['dashboard']);
  }

  getErrorMessage(fieldName: string) {
    const errors = this.employeeForm.get(fieldName).errors;

    if (errors && errors?.required){ return 'You should enter a name.'; }
    if (errors && (errors?.minlength || errors?.maxlength)){ return 'It must have between 3 and 22 chars.'; }
    if (errors && errors?.pattern){ return 'It can\'t start with empty spaces'; }

    return null;
  }

  onFormSubmit() {
    if (this.employeeForm.valid) {
      const employeeName = this.employeeForm.get('name').value;
      this.setEmployee(employeeName);
    }
  }
}
