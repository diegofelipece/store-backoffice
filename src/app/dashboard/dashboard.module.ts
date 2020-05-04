import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    ProductsModule
  ]
})
export class DashboardModule { }
