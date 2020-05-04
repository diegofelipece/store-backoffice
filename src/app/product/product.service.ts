import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Product } from './product';
import { environment } from 'src/environments/environment';

const { API_BASE_URL } = environment;

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct(productId: string) {
    return this.http
      .get<Product>(`${API_BASE_URL}/products/${productId}`)
      .pipe(map(product => ({
        id: productId,
        ...product,
      })));
  }

  deleteProduct(productId: string) {
    return this.http.delete(`${API_BASE_URL}/products/${productId}`);
  }
}
