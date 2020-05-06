import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { ProductsService } from '../products.service';
import { Product } from 'src/app/product/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products$: Observable<Product[]>;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

}
