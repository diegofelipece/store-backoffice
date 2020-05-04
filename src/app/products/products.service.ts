import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product, ProductFetched } from '../product/product';
import { environment } from 'src/environments/environment';

const { API_BASE_URL } = environment;

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http
      .get<ProductFetched[]>(`${API_BASE_URL}/products`)
      .pipe<Product[]>(
        map(products => (
          products.map(protoProduct => ({
            id: protoProduct.id,
            ...protoProduct.data,
          }))
        ))
      );
  }
}
