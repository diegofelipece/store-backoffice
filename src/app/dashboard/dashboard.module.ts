import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { DashboardComponent } from './dashboard.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { ProductsModule } from '../products/products.module';
import { CategoriesModule } from '../categories/categories.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    LayoutsModule,
    ProductsModule,
    CategoriesModule
  ]
})
export class DashboardModule { }
