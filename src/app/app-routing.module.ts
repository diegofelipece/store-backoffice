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
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [EmployeeGuard],
    data: {
      title: 'Dashboard',
    }
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    data: {
      title: 'Set active employee',
    }
  },
  {
    path: 'product',
    canActivate: [EmployeeGuard],
    children: [
      {
        path: 'add',
        component: ProductAddComponent,
        data: {
          title: 'Add a new product',
        }
      },
      {
        path: ':id',
        component: ProductViewComponent,
        data: {
          title: 'Product Details',
        }
      },
      {
        path: '**',
        redirectTo: '/not-found'
      },
    ]
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'Page not found',
    }
  },
  {
    path: '**',
    redirectTo: '/not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
