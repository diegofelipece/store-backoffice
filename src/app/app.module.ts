import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarConfig } from './snackbar/snackbar.config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { ErrorsModule } from './errors/errors.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EmployeeModule } from './employee/employee.module';
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    LayoutsModule,
    ProductModule,
    ErrorsModule,
    DashboardModule,
    EmployeeModule
  ],
  providers: [SnackBarConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
