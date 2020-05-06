import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

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
  ],
  exports: [ProductsListComponent],
  providers: [ProductsService]
})
export class ProductsModule { }
