import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Store } from './store';

const { API_BASE_URL } = environment;

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getStore(): Observable<Store> {
    return this.http.get<Store>(API_BASE_URL);
  }
}
