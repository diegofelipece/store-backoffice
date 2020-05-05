import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SnackBarConfig } from '../snackbar/snackbar.config';

import { ProductAddComponent } from './product-add/product-add.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductService } from './product.service';
import { LayoutsModule } from '../layouts/layouts.module';
import { CategoriesModule } from '../categories/categories.module';

@NgModule({
  declarations: [
    ProductAddComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCardModule,
    MatSnackBarModule,
    LayoutsModule,
    CategoriesModule
  ],
  providers: [ ProductService, SnackBarConfig ]
})
export class ProductModule { }
