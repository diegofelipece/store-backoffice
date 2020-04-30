import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { EmployeeGuard } from './employee/employee.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [EmployeeGuard],
  },
  { path: 'employee', component: EmployeeComponent },
  {
    path: 'product',
    canActivate: [EmployeeGuard],
    children: [
      { path: 'add', component: ProductAddComponent },
      { path: ':id', component: ProductViewComponent },
      { path: '**', component: NotFoundComponent },
    ]
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
