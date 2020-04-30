import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StoreService } from './store/store.service';
import { Store } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  store$: Observable<Store>;
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.store$ = this.storeService.getStore();
  }
}
