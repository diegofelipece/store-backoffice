import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';

import { CategoriesService } from './categories.service';
import { CategoriesChartComponent } from './categories-chart/categories-chart.component';
import { LayoutsModule } from '../layouts/layouts.module';

@NgModule({
  declarations: [CategoriesChartComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ChartsModule,
    LayoutsModule
  ],
  providers: [CategoriesService],
  exports: [CategoriesChartComponent]
})
export class CategoriesModule { }
