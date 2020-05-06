import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsService } from './products.service';
import { LayoutsModule } from '../layouts/layouts.module';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    LayoutsModule,
    RouterModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    LayoutModule,
  ],
  exports: [ProductsListComponent],
  providers: [ProductsService]
})
export class ProductsModule { }
