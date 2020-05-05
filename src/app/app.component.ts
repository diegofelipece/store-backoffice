import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MatSnackBar } from '@angular/material/snack-bar';

import { StoreService } from './store/store.service';
import { Store } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  store$: Observable<Store>;
  constructor(
    private storeService: StoreService,
    private snackbar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.fetchStoreData();
  }

  fetchStoreData() {
    this.store$ = this.storeService.getStore()
      .pipe(catchError(err => {
        const snackbarRef = this.snackbar.open('Something went wrong, please try again', 'Try Again', { duration: -1 });
        snackbarRef.onAction().subscribe(() => {
          this.fetchStoreData();
        });

        return throwError(err);
      }));
  }
}
