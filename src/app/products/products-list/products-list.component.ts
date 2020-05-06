import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProductsService } from '../products.service';
import { Product } from 'src/app/product/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products$: Observable<Product[]>;
  @Input() activeLayout: 'rows' | 'grid' = 'rows';
  layouts = {
    rows: {
      cols: 1,
      height: '80px',
      class: '--rows'
    },
    grid: {
      cols: 4,
      height: '1:1',
      class: '--grid'
    }
  };
  constructor(
    private productsService: ProductsService,
    breakpointObserver: BreakpointObserver,
    private snackbar: MatSnackBar
  ) {
    breakpointObserver
      .observe([ Breakpoints.XSmall ])
      .subscribe(result => {
        const isSmallScreen = result.matches;

        this.layouts.grid.cols = isSmallScreen ? 2 : 4;
        this.layouts.grid.height = isSmallScreen ? '1:2' : '1:1';
      });
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.products$ = this.productsService
      .getProducts()
      .pipe(catchError(err => {
        const snackbarRef = this.snackbar.open(
          'An error occurred while we were trying to get your product list, please try again',
          'Try Again',
          { duration: -1 }
        );
        snackbarRef.onAction().subscribe(() => {
          this.fetchProducts();
        });

        return throwError(err);
      }));
  }

}
