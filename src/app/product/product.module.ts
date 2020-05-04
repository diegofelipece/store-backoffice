import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';

import { ProductAddComponent } from './product-add/product-add.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductService } from './product.service';
import { LayoutsModule } from '../layouts/layouts.module';

@NgModule({
  declarations: [
    ProductAddComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [ProductService]
})
export class ProductModule { }
