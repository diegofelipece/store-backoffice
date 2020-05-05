import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

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

  addProduct(product: Product) {
    console.log('JSON.stringify(product)', JSON.stringify(product));

    return this.http.post(`${API_BASE_URL}/products`, JSON.stringify(product), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
    .pipe(map(res => true))
    .pipe(
      catchError(err => (
        // avoid "fake" errors
        (err.status === 200 && err.error?.text) ? of(err.error?.text) : throwError(err)
      ))
    );
  }

  deleteProduct(productId: string) {
    return this.http.delete(`${API_BASE_URL}/products/${productId}`);
  }
}
