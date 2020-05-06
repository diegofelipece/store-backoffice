import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Store } from './store';
import { environment } from 'src/environments/environment';

const { API_BASE_URL } = environment;

@Injectable()
export class StoreService {

  constructor(private http: HttpClient) { }

  getStore(): Observable<Store> {
    return this.http.get<Store>(API_BASE_URL);
  }
}
