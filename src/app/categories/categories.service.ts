import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Category, CategoryFetched } from './category';
import { map } from 'rxjs/operators';

const { API_BASE_URL } = environment;

@Injectable()
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http
      .get<CategoryFetched[]>(`${API_BASE_URL}/stats/categories`)
      .pipe<Category[]>(map(fetchedCategories => (
        fetchedCategories.map(({ category, numberOfProducts }) => ({ name: category, productsCount: numberOfProducts}))
      )));
  }
}
