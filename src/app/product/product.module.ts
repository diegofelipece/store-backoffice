import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductAddComponent } from './product-add/product-add.component';
import { ProductViewComponent } from './product-view/product-view.component';

@NgModule({
  declarations: [
    ProductAddComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
