import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  product$: Observable<Product>;
  productId: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private snackbar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      ({ id }) => {
        this.productId = id;
        this.fetchProductDetails();
      },
    );
  }

  fetchProductDetails() {
    this.product$ = this.productService
      .getProduct(this.productId)
      .pipe(catchError(
        err => {
          const snackbarRef = this.snackbar.open(
            'An error occurred while we were trying to get the product details, please try again',
            'Try Again',
            { duration: -1 }
          );
          snackbarRef.onAction().subscribe(() => {
            this.fetchProductDetails();
          });

          return throwError(err);
        }
      ));
  }

  deleteProduct(product: Product) {
    this.productService
      .deleteProduct(product.id)
      .subscribe(
        (respose) => {
          this.snackbar.open(`Product "${product.title}" deleted successfully!`);
          this.router.navigate(['dashboard']);
        },
        err => this.snackbar.open(`Sorry, product "${product.title}" deletion failed.`)
      );
  }
}
