import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { ProductsService } from '../products.service';
import { Product } from 'src/app/product/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products$: Observable<Product[]>;
  @Input() activeLayout = 'rows';
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
    breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver
      .observe([ Breakpoints.XSmall ])
      .subscribe(result => {
        const isSmallScreen = result.matches;

        this.layouts.grid.cols = isSmallScreen ? 1 : 4;
        this.layouts.grid.height = isSmallScreen ? '120px' : '1:1';
      });
  }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

}
